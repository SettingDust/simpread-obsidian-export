[[ {{ info.title }} ]] 
--
{{ info.href }}{% if info.tags %}{% for tag in info.tags %}
- [[ {{ tag }} ]]{% endfor %}{% endif %}{% if info.description %}

> {{ info.description }} {% endif %}{% if info.note %}

{{ info.note }}{% endif %}{% if annotates %}
{% for annotate in annotates %}
{{ annotate.content }} 
-----
[[ {{ info.title }}#^{{ annotate.anchor }} ]]
{% if annotate.tags %}
{% for tag in annotate.tags %}- [[ {{ tag }} ]]
{% endfor %}{% endif %}
{{ annotate.note }}{% endfor %}{% endif %}
