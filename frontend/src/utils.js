export default function cropHTML(html) {
    if (html.length > 200){
        return html.substring(0, 200) + '...' + html.substring(html.length-50, html.length);
    } else return html;
  } 


