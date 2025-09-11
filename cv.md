---
layout: page
title: CV
permalink: /cv/
---
<p><a href="/assets/cv/jake-peterson-cv.pdf">Download PDF</a></p>

<h2>Experience</h2>
<ol class="timeline">
  {% for item in site.data.cv.experience %}
  <li>
    <h3>{{ item.role }} — {{ item.org }}</h3>
    <p class="when">{{ item.start }}–{{ item.end }}</p>
    {% if item.bullets %}
    <ul>{% for b in item.bullets %}<li>{{ b }}</li>{% endfor %}</ul>
    {% endif %}
  </li>
  {% endfor %}
</ol>

<h2>Education</h2>
<ul>
  {% for edu in site.data.cv.education %}
  <li><strong>{{ edu.title }}</strong>, {{ edu.org }} ({{ edu.start }}–{{ edu.end }})</li>
  {% endfor %}
</ul>

<h2>Selected Projects</h2>
<ul>
  {% for proj in site.data.cv.projects %}
  <li><strong>{{ proj.name }}</strong> ({{ proj.when }}) —
    {% if proj.bullets %}{% for b in proj.bullets %}{{ b }}{% if forloop.last == false %}; {% endif %}{% endfor %}{% endif %}
  </li>
  {% endfor %}
</ul>

<h2>Skills</h2>
<p>{{ site.data.cv.skills | join: ", " }}</p>