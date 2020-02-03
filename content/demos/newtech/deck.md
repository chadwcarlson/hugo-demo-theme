---
title: Try new technologies and architectures
outline:
    problem: |
        I'd like to test Elasticsearch with my app.
draft: false
type: deck
notes:
  title: |
    Splitting an application into a collection of coupled services can help simplify your projects and clarify contributor responsibilities.
  problem: |
    After awhile, you may come to realize that your monolith codebase is getting too big to handle.
---

{{< slide type="image" src="../assets/01-elasticsearch-branch.png" alt="Use the UI to make a new elasticsearch branch" class="screenshot" >}}

<p>To test a new technology, start by making a new branch.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/02-services.cast" >}}
<p>On the new branch, add the Elasticsearch service to<br />your <code>services.yaml</code> file.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/03-app-yaml.cast" >}}
<p>The <code>relationships</code> in the <code>.platform.app.yaml</code> file give your app access to the new Elasticsearch service.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide >}}
<p>Deploy these changes using <code>git push</code>.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/04-tunnel.cast" >}}
<p>Access the new cloud service locally via a tunnel.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/05-curl.cast" >}}
<p>Send a request to the ES server in the cloud using the local tunnel.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="asciicast" src="../assets/06-relationships.cast" >}}
<p>Your app will use the connection details in <code>PLATFORM_RELATIONSHIPS</code> to connect to the ES service.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide type="image" src="../assets/07-share.gif" alt="Share the new environment by copying the URL" class="screenshot" >}}
<p>Share the new environment URL with others.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}

{{< slide >}}
  <p>When you're ready to go live, just merge into <code>master</code> and the application deploys with the new Elasticsearch service.</p>

  <aside class="notes">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
    Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
    Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
    Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
  </aside>
{{< /slide >}}

{{< slide >}}
<p>Infrastructure is code.  <br />If you want to go back, just <code>git revert</code><br />as you would for any other code.</p>

<aside class="notes">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet feugiat eros a posuere.
  Maecenas lacinia erat eu elit bibendum, et suscipit libero viverra. Pellentesque felis magna, viverra eget pulvinar vitae, lobortis a dui.
  Pellentesque volutpat nulla a enim rutrum laoreet. Quisque est urna, faucibus ut turpis eu, dictum mollis elit.
  Nulla facilisi. Aenean lorem quam, laoreet ut sagittis quis, lacinia quis turpis.
</aside>
{{< /slide >}}
