---
layout: page
title: "Друзі"
permalink: /friends/
---

<div>
{% assign friends_per_row = 3 %}
{% assign counter = 0 %}
{% for friend in site.data.friends %}
    {% if counter == 0 %}
    <div class="row">
    {% endif %}
        <div class="col-md-4 text-center">
            <a href="{{ friend.link }}">
                <div style="width: 100%; height: 10em; background: black;"></div>
                {{ friend.title }}
            </a>
        </div>
    {% assign counter = counter | plus: 1 %}
    {% if counter == friends_per_row %}
    </div>
    {% assign counter = 0 %}
    {% endif %}
{% endfor %}
</div>