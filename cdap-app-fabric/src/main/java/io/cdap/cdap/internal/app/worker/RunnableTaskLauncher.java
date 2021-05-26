/*
 * Copyright © 2021 Cask Data, Inc.
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

package io.cdap.cdap.internal.app.worker;

import com.google.inject.Guice;
import com.google.inject.Injector;
import io.cdap.cdap.common.conf.CConfiguration;
import io.cdap.cdap.common.internal.worker.RunnableTask;
import io.cdap.cdap.common.internal.worker.RunnableTaskContext;
import org.apache.hadoop.conf.Configuration;

/**
 * RunnableTaskLauncher launches a {@link RunnableTask} by loading its class and calling its run method.
 */
public class RunnableTaskLauncher {
  private final CConfiguration cConf;
  private final Configuration hConf;

  public RunnableTaskLauncher(CConfiguration cConf, Configuration hConf) {
    this.cConf = cConf;
    this.hConf = hConf;
  }

  public byte[] launchRunnableTask(RunnableTaskRequest request) throws Exception {

    ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
    if (classLoader == null) {
      classLoader = getClass().getClassLoader();
    }

    Class<?> clazz = classLoader.loadClass(request.getClassName());

    Injector injector = Guice.createInjector(new RunnableTaskModule(cConf));
    Object obj = injector.getInstance(clazz);

    if (!(obj instanceof RunnableTask)) {
      throw new ClassCastException(String.format("%s is not a RunnableTask", request.getClassName()));
    }
    RunnableTask runnableTask = (RunnableTask) obj;
    RunnableTaskContext runnableTaskContext = new RunnableTaskContext(request.getParam());
    runnableTask.run(runnableTaskContext);
    return runnableTaskContext.getResult();
  }
}