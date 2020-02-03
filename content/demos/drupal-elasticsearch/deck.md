---
title: Use Elasticsearch with Drupal
outline:
    problem: |
        Elasticsearch rocks. But can I use it with Drupal?
    spoiler: |
        Spoiler alert: Yes
draft: false
type: deck
notes:
  title: Elasticsearch is a distributed RESTful search engine built for the cloud.
  problem: |
    This demo shows how to configure Elasticsearch to work with Drupal on Platform.sh.
---

{{< slide >}}

Platform.sh fully supports both Elasticsearch and Solr

<div class="two-col-svg">
<div><img src="../assets/elasticsearch-logo.svg" alt="Elasticsearch" class="plain" data-credit="https://www.elastic.co/brand" /></div>
<div><img src="../assets/solr-logo.svg" alt="Apache Solr" class="plain" data-credit="https://freebiesupply.com/logos/solr-logo/" /></div>
</div>

<aside class="notes">
  Platform.sh fully supports Elasticsearch and Solr for search.
</aside>
{{< /slide >}}

{{< slide >}}

<div>
  <p>Add three lines to <code>services.yaml</code></p>
  <pre><code class="yaml" data-trim>
elasticsearch:
  type: elasticsearch:6.5
  disk: 512
  </code></pre>
</div>
<div style="margin-top: 2em;">
  <p>Add one line to <code>.platform.app.yaml</code></p>
  <pre><code class="yaml" data-trim>
relationships:
  elasticsearch: 'elasticsearch:elasticsearch'
  </code></pre>
</div>
<aside class="notes">
  And both can be added to your Platform.sh projects with a service definition in your <code>services.yaml</code>
  and by adding a relationship to you <code>.platform.app.yaml</code> file.
</aside>
{{< /slide >}}

{{< slide >}}

Add three lines to `services.yaml`

{{< highlight yaml >}}
elasticsearch:
    type: elasticsearch:6.5
    disk: 512
{{< /highlight>}}

Add one line to `.platform.app.yaml`

{{< highlight yaml >}}
relationships:
    elasticsearch: 'elasticsearch:elasticsearch'
{{< /highlight>}}

{{< /slide >}}

{{< slide >}}

Install Drupal modules

{{< highlight bash >}}
composer require drupal/elasticsearch_connector drupal/search_api
{{< /highlight>}}

<aside class="notes">
  Then you can install the Drupal modules to your application, and push.
</aside>
{{< /slide >}}

{{< slide >}}

<p>Configure a Cluster in Drupal</p>
<p><img src="../assets/01-elasticsearch-cluster.png" width="100%" alt="Create a cluster and note the machine name"></p>
<p>Note the machine name you give it</p>

<aside class="notes">
  Configure the Elasticsearch cluster in Drupal, noting the machine name that you give it.
</aside>
{{< /slide >}}

{{< slide >}}

<p>Drop some glue code into <code>settings.php</code></p>

{{< highlight php >}}
// Update these values to the relationship name (from .platform.app.yaml)
// and the machine name of the server from your Drupal configuration.
$relationship_name = 'elasticsearch';
$es_server_name = 'my_cluster';
if ($platformsh->hasRelationship($relationship_name)) {
  $platformsh->registerFormatter('drupal-elastic', function($creds) {
    return sprintf('http://%s:%s', $creds['host'], $creds['port']);
});

$config['elasticsearch_connector.cluster.' . $es_server_name]['url'] =
    $platformsh->formattedCredentials($relationship_name, 'drupal-elastic');
}
{{< /highlight>}}

<aside class="notes">
  Finally, add some glue code to your <code>settings.php</code> using the relationship
  name and the name of the cluster to add Elasticsearch to your Drupal config.
</aside>

{{< /slide >}}

{{< slide type="image" src="../assets/02-search-api.png" width="100%" alt="Now configure your Elasticsearch instance in Search API like normal.  That's all there is to it." >}}
<aside class="notes">
  Now that it's enabled, you can configure your Elasticsearch instance in the Search API, and you're ready to go.
</aside>
{{< /slide >}}
