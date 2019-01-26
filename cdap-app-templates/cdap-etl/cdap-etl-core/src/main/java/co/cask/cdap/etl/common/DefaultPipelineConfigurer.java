/*
 * Copyright © 2015-2019 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package co.cask.cdap.etl.common;

import co.cask.cdap.api.DatasetConfigurer;
import co.cask.cdap.api.dataset.Dataset;
import co.cask.cdap.api.dataset.DatasetProperties;
import co.cask.cdap.api.dataset.module.DatasetModule;
import co.cask.cdap.api.plugin.PluginConfigurer;
import co.cask.cdap.api.plugin.PluginProperties;
import co.cask.cdap.api.plugin.PluginSelector;
import co.cask.cdap.etl.api.Engine;
import co.cask.cdap.etl.api.MultiInputPipelineConfigurer;
import co.cask.cdap.etl.api.MultiInputStageConfigurer;
import co.cask.cdap.etl.api.MultiOutputPipelineConfigurer;
import co.cask.cdap.etl.api.MultiOutputStageConfigurer;
import co.cask.cdap.etl.api.PipelineConfigurer;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Nullable;

/**
 * Configurer for a pipeline, that delegates all operations to a PluginConfigurer, except it prefixes plugin ids
 * to provide isolation for each etl stage. For example, a source can use a plugin with id 'jdbcdriver' and
 * a sink can also use a plugin with id 'jdbcdriver' without clobbering each other.
 */
public class DefaultPipelineConfigurer implements PipelineConfigurer, MultiInputPipelineConfigurer,
  MultiOutputPipelineConfigurer {
  private final Engine engine;
  private final PluginConfigurer pluginConfigurer;
  private final DatasetConfigurer datasetConfigurer;
  private final String stageName;
  private final DefaultStageConfigurer stageConfigurer;
  private final Map<String, String> properties;

  public DefaultPipelineConfigurer(PluginConfigurer pluginConfigurer, DatasetConfigurer datasetConfigurer,
                                   String stageName, Engine engine) {
    this(pluginConfigurer, datasetConfigurer, stageName, engine, new DefaultStageConfigurer());
  }

  public DefaultPipelineConfigurer(PluginConfigurer pluginConfigurer, DatasetConfigurer datasetConfigurer,
                                   String stageName, Engine engine, DefaultStageConfigurer stageConfigurer) {
    this.pluginConfigurer = pluginConfigurer;
    this.datasetConfigurer = datasetConfigurer;
    this.stageName = stageName;
    this.stageConfigurer = stageConfigurer;
    this.engine = engine;
    this.properties = new HashMap<>();
  }

  @Override
  public void addDatasetModule(String moduleName, Class<? extends DatasetModule> moduleClass) {
    datasetConfigurer.addDatasetModule(moduleName, moduleClass);
  }

  @Override
  public void addDatasetType(Class<? extends Dataset> datasetClass) {
    datasetConfigurer.addDatasetType(datasetClass);
  }

  @Override
  public void createDataset(String datasetName, String typeName, DatasetProperties properties) {
    datasetConfigurer.createDataset(datasetName, typeName, properties);
  }

  @Override
  public void createDataset(String datasetName, String typeName) {
    datasetConfigurer.createDataset(datasetName, typeName);
  }

  @Override
  public void createDataset(String datasetName, Class<? extends Dataset> datasetClass, DatasetProperties props) {
    datasetConfigurer.createDataset(datasetName, datasetClass, props);
  }

  @Override
  public void createDataset(String datasetName, Class<? extends Dataset> datasetClass) {
    datasetConfigurer.createDataset(datasetName, datasetClass);
  }

  @Nullable
  @Override
  public <T> T usePlugin(String pluginType, String pluginName, String pluginId, PluginProperties properties) {
    return pluginConfigurer.usePlugin(pluginType, pluginName, getPluginId(pluginId), properties);
  }

  @Nullable
  @Override
  public <T> T usePlugin(String pluginType, String pluginName, String pluginId, PluginProperties properties,
                         PluginSelector selector) {
    return pluginConfigurer.usePlugin(pluginType, pluginName, getPluginId(pluginId), properties, selector);
  }

  @Nullable
  @Override
  public <T> Class<T> usePluginClass(String pluginType, String pluginName, String pluginId,
                                     PluginProperties properties) {
    return pluginConfigurer.usePluginClass(pluginType, pluginName, getPluginId(pluginId), properties);
  }

  @Nullable
  @Override
  public <T> Class<T> usePluginClass(String pluginType, String pluginName, String pluginId, PluginProperties properties,
                                     PluginSelector selector) {
    return pluginConfigurer.usePluginClass(pluginType, pluginName, getPluginId(pluginId), properties, selector);
  }
  
  private String getPluginId(String childPluginId) {
    return String.format("%s%s%s", stageName, Constants.ID_SEPARATOR, childPluginId);
  }

  @Override
  public DefaultStageConfigurer getStageConfigurer() {
    return stageConfigurer;
  }

  @Override
  public Engine getEngine() {
    return engine;
  }

  @Override
  public void setPipelineProperties(Map<String, String> properties) {
    this.properties.clear();
    this.properties.putAll(properties);
  }

  @Override
  public MultiInputStageConfigurer getMultiInputStageConfigurer() {
    return stageConfigurer;
  }

  @Override
  public MultiOutputStageConfigurer getMultiOutputStageConfigurer() {
    return stageConfigurer;
  }

  public Map<String, String> getPipelineProperties() {
    return properties;
  }
}
