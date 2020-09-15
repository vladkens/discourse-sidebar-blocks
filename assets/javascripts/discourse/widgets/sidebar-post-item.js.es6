import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import getURL from "discourse-common/lib/get-url";
import { iconNode } from "discourse-common/lib/icon-library";

createWidget('sidebar-post-item', {
  tagName: 'div.sidebar-post-item',

  html(attrs) {
    var url = getURL("/t/") + attrs.slug + "/" + attrs.id;
    if (attrs.image_url){
        return [
          h('img.sidebar-thumbnail', {attributes: { src: attrs.image_url }
          }),
          h('div.sidebar-post-container', {},
            [
              h('a.item-title', {
                attributes: { href: url}
              }, attrs.title),
              h('div.sidebar-like-reply-container', {}, 
              [
                h('div.sidebar-like-area', {},[
                  h('span.like_count', {}, attrs.like_count),
                  iconNode('tree')
                ]),
                h('div.sidebar-reply-area', {}, [
                  h('span.sidebar-reply-label', {}, 'Replies:'),
                  h('span.sidebar-reply-text', {}, attrs.posts_count - 1)
                ])
              ])
            ]
          )
          // h('span', this.attach('featured-link', {topic: attrs}))
        ]
    } else {
      return [
        h('div.sidebar-post-container-no-image', {},
        [
          h('a.item-title', {
            attributes: { href: url}
          }, attrs.title),
          h('div.sidebar-like-reply-container', {}, 
              [
                h('div.sidebar-like-area', {},[
                  h('span.like_count', {}, attrs.like_count),
                  iconNode('tree')
                ]),
                h('div.sidebar-reply-area', {}, [
                  h('span.sidebar-reply-label', {}, 'Replies:'),
                  h('span.sidebar-reply-text', {}, attrs.posts_count - 1)
                ])
              ])
        ]
      )
    ]
  }
  },
});
