---
title: Production environments and services
outline:
    problem: |
        I don't want toy demo services; I want real production services.
draft: false
type: deck
notes:
  title: |
    A PaaS provider should be able to provide real production environments and services for developers that use it.
  problem: |
    There's no sense in a testing environment containing demo services that can't accomplish everything that production can.
---

{{< slide >}}

<ul class="logo-list">
  <li><img src="../assets/languages/php-logo.svg" alt="PHP 7" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:PHP-logo.svg" /></li>
  <li><img src="../assets/languages/python-logo.svg" alt="Python" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Python.svg" /></li>
  <li><img src="../assets/languages/nodejs-logo.svg" alt="NodeJs" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg" /></li>
  <li><img src="../assets/languages/ruby-logo.svg" alt="Ruby" class="plain" data-credit="https://commons.wikimedia.org/wiki/File:Ruby_logo.svg" /></li>
  <li><img src="../assets/languages/golang-logo.svg" alt="Go" class="plain" data-credit="https://www.vectorlogo.zone/logos/golang/index.html" /></li>
</ul>
<p style="margin-top: 0;">Every environment is configured production-ready.</p>
<aside class="notes">
  Each environment on Platform.sh is configured production-ready. Runtimes are set to the same standard,
</aside>
{{< /slide >}}

{{< slide >}}

<ul class="logo-list services">
  <li><img src="../assets/services/elasticsearch-logo.svg" alt="Elasticsearch" class="plain" data-credit="https://www.elastic.co/brand" /></li>
  <li><img src="../assets/services/solr-logo.svg" alt="Apache Solr" class="plain" data-credit="https://freebiesupply.com/logos/solr-logo/" /></li>
  <li><img src="../assets/services/memcached-logo.svg" alt="Memcached" class="plain" data-credit="https://eengine.pl/en/case/strefatenisa-com-pl-serwery-w-chmurze" /></li>
  <li><img src="../assets/services/mongodb-logo.svg" alt="MongoDB" class="plain" data-credit="https://en.wikipedia.org/wiki/MongoDB#/media/File:MongoDB-Logo.svg" /></li>
  <li><img src="../assets/services/mariadb-logo.svg" alt="MariaDB" class="plain" data-credit="https://mariadb.org/about/logos/" /></li>
  <li><img src="../assets/services/postgresql-logo.svg" alt="PostgreSQL" class="plain" data-credit="https://www.vectorlogo.zone/logos/postgresql/index.html" /></li>
  <li><img src="../assets/services/redis-logo.svg" alt="Redis" class="plain" data-credit="https://iconscout.com/icon/redis-3" /></li>
  <li><img src="../assets/services/rabbitmq-logo.svg" alt="RabbitMQ" class="plain" data-credit="https://worldvectorlogo.com/logo/rabbitmq" /></li>
<!--        <li><img src="assets/services/varnish-logo.svg" alt="Varnish" class="plain" data-credit="https://www.vectorlogo.zone/logos/varnish-cache/index.html" /></li>-->
</ul>
<p style="margin-top: 0;">As is every service.</p>
<aside class="notes">
  and the same goes for each of our managed services.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/1-postgres.cast" >}}
Upgrading most services is trivial, too.
<aside class="notes">
  At any point if your application requires the newest version of any service, upgrading them in most cases is as easy as a single
  character change in your <code>services.yaml</code> file.
</aside>
{{< /slide >}}

{{< slide >}}
<p>Services are exposed only to your application, not the web.</p>
<p>That makes everything secure by default.</p>
<aside class="notes">
  Each service you define is exposed only to your application, not to the web, making everything secure by default.
</aside>
{{< /slide >}}
