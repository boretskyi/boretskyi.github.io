---
layout: page
title: Друзі
description: Наші могилянські та немогилянські друзі
permalink: /friends/
---

<div>
{% assign counter = 0 %}
{% for friend in site.data.friends %}
    {% if counter == 0 %}
    <div class="row">
    {% endif %}
        <div class="col-sm-3 text-center grid-item">
            <a href="{{ friend.link }}">
                <img src="{{ friend.image | prepend: site.baseurl }}">
                <span class="meta">{{ friend.title }}</span>
            </a>
        </div>
    {% assign counter = counter | plus: 1 %}
    {% if counter == 4 %}
    </div>
    {% assign counter = 0 %}
    {% endif %}
{% endfor %}
</div>