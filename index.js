import SunsmileReact from './lib/sunsmile-react'

const element = (
    <div id="foo">
      <a>bar</a>
      <b />
    </div>
)

const dom = document.getElementById("root");

SunsmileReact.render(element, dom)