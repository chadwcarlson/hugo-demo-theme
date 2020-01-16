---
title: Use Elasticsearch with Drupal
outline:
    problem: |
        Elasticsearch rocks. But can I use it with Drupal?
    spoiler: |
        Spoiler alert: Yes
draft: false
type: deck
---

{{< slide >}}

Platform.sh fully supports both Elasticsearch and Solr

<div class="two-col-svg">
<div><img src="../assets/elasticsearch-logo.svg" alt="Elasticsearch" class="plain" data-credit="https://www.elastic.co/brand" /></div>
<div><img src="../assets/solr-logo.svg" alt="Apache Solr" class="plain" data-credit="https://freebiesupply.com/logos/solr-logo/" /></div>
</div>

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

{{< /slide >}}

{{< slide >}}

<p>Configure a Cluster in Drupal</p>
<p><img src="../assets/01-elasticsearch-cluster.png" width="100%" alt="Create a cluster and note the machine name"></p>
<p>Note the machine name you give it</p>

{{< /slide >}}

{{< slide >}}

Drop some glue code into `settings.php`

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

{{< /slide >}}

{{< slide type="image" src="../assets/02-search-api.png" width="100%" alt="Now configure your Elasticsearch instance in Search API like normal.  That's all there is to it." >}}
{{< /slide >}}
