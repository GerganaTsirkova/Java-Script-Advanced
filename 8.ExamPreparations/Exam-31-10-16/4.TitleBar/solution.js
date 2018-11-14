class TitleBar {
    constructor(title){
        this.title = title;
        this.links = []
    }

    addLink(href, name){
        this.links.push(`<a class="menu-link" href=${href}">${name}</a>`)
    }

    appendTo(selector){

        $(selector).append(this.generate());
    }

    generate(){
        let html = `<header class="header">
  <div class="header-row">
    <a class="button">&#9776;</a>
    <span class="title">${this.title}</span>
  </div>
  <div class="drawer">
    <nav class="menu">
         ${this.links}
    </nav>
  </div>
</header>`;
        let drawer = html.find('.drawer');
        html.find('.button').on('click',function () {
            if(drawer.css('display','none')){
                drawer.css('display','block')
            }
            else {
                drawer.css('display','none')
            }
        });

        return html
    }
}





