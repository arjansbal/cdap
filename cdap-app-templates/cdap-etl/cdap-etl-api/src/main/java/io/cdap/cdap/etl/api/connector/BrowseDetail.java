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
 *
 */

package io.cdap.cdap.etl.api.connector;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;

/**
 * The browse result for the given request
 */
public class BrowseDetail {
  // this count represents the total count of entities, when pagination is added in the future,
  // this count might not be equal to entities.size()
  private final int count;
  // explore entity type -> sample property
  private final Collection<BrowseEntityTypeInfo> sampleProperties;
  private final List<BrowseEntity> entities;

  private BrowseDetail(int count, Collection<BrowseEntityTypeInfo> sampleProperties,
                      List<BrowseEntity> entities) {
    this.count = count;
    this.sampleProperties = sampleProperties;
    this.entities = entities;
  }

  public Collection<BrowseEntityTypeInfo> getSampleProperties() {
    return sampleProperties;
  }

  public int getCount() {
    return count;
  }

  public List<BrowseEntity> getEntities() {
    return entities;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }

    if (o == null || getClass() != o.getClass()) {
      return false;
    }

    BrowseDetail that = (BrowseDetail) o;
    return count == that.count &&
      Objects.equals(sampleProperties, that.sampleProperties) &&
      Objects.equals(entities, that.entities);
  }

  @Override
  public int hashCode() {
    return Objects.hash(count, sampleProperties, entities);
  }

  /**
   * Get the builder to build this object
   */
  public static Builder builder(int count) {
    return new Builder(count);
  }

  /**
   * Builder for {@link BrowseDetail}
   */
  public static class Builder {
    private int count;
    private Collection<BrowseEntityTypeInfo> sampleProperties;
    private List<BrowseEntity> entities;

    public Builder(int count) {
      this.count = count;
      this.sampleProperties = new HashSet<>();
      this.entities = new ArrayList<>();
    }

    public Builder setCount(int count) {
      this.count = count;
      return this;
    }

    public Builder setSampleProperties(Collection<BrowseEntityTypeInfo> sampleProperties) {
      this.sampleProperties.clear();
      this.sampleProperties.addAll(sampleProperties);
      return this;
    }

    public Builder setEntities(List<BrowseEntity> entities) {
      this.entities.clear();
      this.entities.addAll(entities);
      return this;
    }

    public Builder addEntities(List<BrowseEntity> entities) {
      this.entities.addAll(entities);
      return this;
    }

    public BrowseDetail build() {
      return new BrowseDetail(count, sampleProperties, entities);
    }
  }
}
