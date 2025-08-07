import React, { useState, useEffect } from 'react';

const CheatSheet = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedCards, setExpandedCards] = useState(new Set());
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [animateCards, setAnimateCards] = useState(false);
  
    useEffect(() => {
      setAnimateCards(true);
    }, []);
  
    const toggleCard = (index) => {
      const newExpanded = new Set(expandedCards);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      setExpandedCards(newExpanded);
    };
  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
    };

    const notes = [
        {
          title: "Main Root",
          description: "The <html> tag is the root of an HTML document. It contains all other tags",
          category: "HTML",
          icon: "🌐",
          tips: [
            "Always declare <!DOCTYPE html> at the top.",
            "Use the lang attribute to specify language.",
          ]
        },
        {
  title: "Boilerplate",
  description: "Standard boilerplate includes <!DOCTYPE html>, <html lang=\"en\">, <head> with metadata and <title>, and <body> where visible content goes.",
  category: "HTML",
  icon: "🌐",
  tips: [
    "Always include <!DOCTYPE html> at the top.",
    "Include <meta charset=\"UTF-8\" /> for proper character encoding."
  ]
},
{
  "title": "Headings",
  "description": "HTML heading tags (<h1> to <h6>) define hierarchical headings. <h1> is typically the main title, with descending importance until <h6>. Includes a table for font sizes. GeeksforGeeks",
  "table": [
    {
      "tag": "<h1>",
      "description": "Used for title generally once per page (font size 2 em).",
      "syntax": "<h1>…</h1>"
    },
    {
      "tag": "<h2>",
      "description": "Medium sized titles (1.5 em).",
      "syntax": "<h2>…</h2>"
    },
    {
      "tag": "<h3>",
      "description": "Subsections (1.17 em).",
      "syntax": "<h3>…</h3>"
    },
    {
      "tag": "<h4>",
      "description": "Highlighting text (1 em).",
      "syntax": "<h4>…</h4>"
    },
    {
      "tag": "<h5>",
      "description": "Fifth‑level heading (0.83 em).",
      "syntax": "<h5>…</h5>"
    },
    {
      "tag": "<h6>",
      "description": "Least significant details (0.67 em).",
      "syntax": "<h6>…</h6>"
    }
  ],
  "category": "HTML",
  "icon": "🌐",
  "tips": [
    "Use headings semantically to structure content.",
    "<h1> is used for the main title and typically appears only once per page."
  ],
  
},
        {
  "title": "Container",
  "description": "Container tags in HTML are used to group other elements together. They provide a way to structure your HTML and apply styles to multiple elements at once. The several container tags in HTML are:",
   "category": "HTML",
  "icon": "🌐",
  "tips": [
    "Use <div> for large sections and layout grouping.",
    "<span> is best for inline text styling.",
    "<pre> preserves whitespace and line breaks as written.",
    "<code> is suitable for inline or block code snippets."
  ],
  "table": [
    {
      "tag": "<div>",
      "description": "Block element that defines a division in HTML document.",
      "syntax": "<div>...</div>"
    },
    {
      "tag": "<span>",
      "description": "Inline element used to mark up a part of a text or document.",
      "syntax": "<span>...</span>"
    },
    {
      "tag": "<p>",
      "description": "Used to represent a paragraph.",
      "syntax": "<p>...</p>"
    },
    {
      "tag": "<pre>",
      "description": "Represents pre-formatted text to present exactly as written in the HTML file.",
      "syntax": "<pre>...</pre>"
    },
    {
      "tag": "<code>",
      "description": "Used to represent source codes.",
      "syntax": "<code>...</code>"
    }
  ]
},
 {
  "title": "Document Information",
  "description": "This section encompasses HTML tags that provide a comprehensive summary of the content within the HTML document. These tags offer a snapshot of what the document contains, enhancing the understanding of its structure and content.",
  "category": "HTML",
  "icon": "🌐",
  "code": "",
  "tips": [
    "Use <head> to group metadata about the document.",
    "<title> appears on browser tabs and is crucial for SEO.",
    "<meta> tags help describe your content to search engines.",
    "<link> connects external resources like stylesheets.",
    "<style> allows embedding CSS directly within the document."
  ],
  "table": [
    {
      "tag": "<head>",
      "description": "Container for metadata which is data about data.",
      "syntax": "<head>...</head>"
    },
    {
      "tag": "<link>",
      "description": "Used to link external style sheets or documents.",
      "syntax": "<link>"
    },
    {
      "tag": "<meta>",
      "description": "Defines metadata about HTML document.",
      "syntax": "<meta/>"
    },
    {
      "tag": "<title>",
      "description": "Defines the document's title.",
      "syntax": "<title>...</title>"
    },
    {
      "tag": "<style>",
      "description": "Used to define style information (CSS) for a document.",
      "syntax": "<style>...</style>"
    }
  ]
},
{
  "title": "Semantic Element",
  "description": "Semantic Elements in HTML are elements that clearly describe their meaning in terms of content and function, both to the browser and the developer.",
  "category": "HTML",
 "icon": "🌐",
  "code": "",
  "tips": [
    "Use semantic elements to improve accessibility and SEO.",
    "Browsers and screen readers can better interpret semantic tags.",
    "Use <main> only once per page to denote primary content."
  ],
  "table": [
    {
      "tag": "<header>",
      "description": "Used to give introductory content about the document.",
      "syntax": "<header>...</header>"
    },
    {
      "tag": "<main>",
      "description": "Represents the main dominant content of a document.",
      "syntax": "<main>...</main>"
    },
    {
      "tag": "<section>",
      "description": "Structural HTML element used to group together related elements.",
      "syntax": "<section>...</section>"
    },
    {
      "tag": "<nav>",
      "description": "Represents a section of a page to provide navigation links.",
      "syntax": "<nav>...</nav>"
    },
    {
      "tag": "<article>",
      "description": "Represents a self-contained composition which is independently distributable or reusable.",
      "syntax": "<article>...</article>"
    },
    {
      "tag": "<aside>",
      "description": "Defines some content aside from the content it is placed in.",
      "syntax": "<aside>...</aside>"
    },
    {
      "tag": "<footer>",
      "description": "Represents a footer for its sectioning root element.",
      "syntax": "<footer>...</footer>"
    },
    {
      "tag": "<address>",
      "description": "Provides contact information for a person, people, or an organization.",
      "syntax": "<address>...</address>"
    }
  ]
},
{
  "title": "Lists",
  "description": "List tags in HTML, including <ul>, <ol>, and <li>, are used to create different types of lists. It can be either numerical, alphabetic, bullet, or other symbols. There are three list types in HTML:\n\nUnordered list: Used to group a set of related items in no particular order.\nOrdered list: Used to group a set of related items in a specific order.\nDescription list: Used to display name/value pairs such as terms and definitions.",
  "category": "HTML",
 "icon": "🌐",
  "code": "",
  "tips": [
    "Use <ul> for unordered lists with bullets.",
    "<ol> is best for sequences or steps where order matters.",
    "<li> must be used inside <ul> or <ol> to define each list item.",
    "Use <dl> with <dt> and <dd> for key-value style definitions (like glossaries)."
  ],
  "table": [
    {
      "tag": "<ul>",
      "description": "Represents an unordered list of items.",
      "syntax": "<ul>...</ul>"
    },
    {
      "tag": "<ol>",
      "description": "The HTML <ol> element represents an ordered list of items.",
      "syntax": "<ol>...</ol>"
    },
    {
      "tag": "<li>",
      "description": "Represents an item in a list.",
      "syntax": "<li>...</li>"
    },
    {
      "tag": "<dl>",
      "description": "Represents a description list.",
      "syntax": "<dl>...</dl>"
    },
    {
      "tag": "<dd>",
      "description": "Used to describe a term/name in a description list.",
      "syntax": "<dd>...</dd>"
    },
    {
      "tag": "<dt>",
      "description": "Specifies a term in a description.",
      "syntax": "<dt>...</dt>"
    }
  ]
},
{
  "title": "Tables",
  "description": "Table tags in HTML, such as <table>, <tr>, <td>, and <th>, are used to create and structure tables in HTML. They allow you to present data in rows and columns.",
 "category": "HTML",
"icon": "🌐",
  "code": "",
  "tips": [
    "Use <caption> to provide a title for your table.",
    "Wrap table header rows in <thead>, body rows in <tbody>, and footer rows in <tfoot>.",
    "<tr> defines a table row, <td> a data cell, and <th> a header cell.",
    "Ensure semantic structure for accessibility and readability."
  ],
  "table": [
    {
      "tag": "<caption>",
      "description": "Specifies caption of a table.",
      "syntax": "<caption>…</caption>"
    },
    {
      "tag": "<table>",
      "description": "Represents data in a two-dimensional table.",
      "syntax": "<table>…</table>"
    },
    {
      "tag": "<thead>",
      "description": "Used to provide a header to the group of content in an HTML table.",
      "syntax": "<thead>…</thead>"
    },
    {
      "tag": "<tbody>",
      "description": "Used to group primary content of an HTML table.",
      "syntax": "<tbody>…</tbody>"
    },
    {
      "tag": "<th>",
      "description": "Defines a cell as header of a group of cells of the table.",
      "syntax": "<th>…</th>"
    },
    {
      "tag": "<td>",
      "description": "Defines a cell of a table.",
      "syntax": "<td>…</td>"
    },
    {
      "tag": "<tr>",
      "description": "Defines a row in an HTML table.",
      "syntax": "<tr>…</tr>"
    },
    {
      "tag": "<tfoot>",
      "description": "Defines a set of rows summarizing the columns of the table.",
      "syntax": "<tfoot>…</tfoot>"
    }
  ]
},
{
  "title": "Forms",
  "description": "An HTML form is a section of a document that acts as a container for different types of input elements, such as text fields, passwords, menus, checkboxes, radio buttons, submit buttons, etc.\n\nGenerally, Form tags in HTML, like <form>, <input>, <textarea>, and <button>, are used to create forms for user input.",
  "category": "HTML",
  "icon": "🌐",
  "code": "",
  "tips": [
    "Use <form> to wrap all input elements meant for submission.",
    "The <label> tag improves accessibility and UX by associating text with input fields.",
    "<input> is a versatile tag for many input types like text, email, password, etc.",
    "<select> is used for dropdowns, and <option> defines each item.",
    "Use <datalist> to add autocomplete suggestions to inputs."
  ],
  "table": [
    {
      "tag": "<form>",
      "description": "Represents a section containing controls for submitting information.",
      "syntax": "<form>...</form>"
    },
    {
      "tag": "<input>",
      "description": "Creates interactive controls for forms to accept data.",
      "syntax": "<input>...</input>"
    },
    {
      "tag": "<textarea>",
      "description": "Create a multi-line plain-text editing control.",
      "syntax": "<textarea>...</textarea>"
    },
    {
      "tag": "<select>",
      "description": "Represents a control that provides a menu of options to select from.",
      "syntax": "<select>...</select>"
    },
    {
      "tag": "<option>",
      "description": "Defines an option in a select list.",
      "syntax": "<option>...</option>"
    },
    {
      "tag": "<optgroup>",
      "description": "Creates a grouping of options within a <select> element.",
      "syntax": "<optgroup>...</optgroup>"
    },
    {
      "tag": "<progress>",
      "description": "Displays an indicator showing the degree of completion of a task.",
      "syntax": "<progress>...</progress>"
    },
    {
      "tag": "<datalist>",
      "description": "Used to give predefined options for an <input> element and adds an autocomplete feature to it.",
      "syntax": "<datalist>...</datalist>"
    },
    {
      "tag": "<button>",
      "description": "Represents a clickable button.",
      "syntax": "<button>...</button>"
    },
    {
      "tag": "<label>",
      "description": "Specifies a label for an <input> element.",
      "syntax": "<label>...</label>"
    }
  ]
},
{
  "title": "Multimedia",
  "description": "Multimedia tags in HTML, such as <img>, <audio>, and <video>, are used to embed multimedia content like images, audio files, and videos into your webpage.",
   "category": "HTML",
  "icon": "🌐",
  "code": "",
  "tips": [
    "Use the <img> tag to embed images with the 'src' and 'alt' attributes.",
    "<audio> and <video> tags support 'controls', 'autoplay', 'loop', and 'muted' attributes.",
    "<figure> and <figcaption> help associate media with captions semantically.",
    "<embed> and <object> are used for non-standard or third-party media formats."
  ],
  "table": [
    {
      "tag": "<img>",
      "description": "Used to link images to web pages.",
      "syntax": "<img />"
    },
    {
      "tag": "<audio>",
      "description": "Used to include sound content in documents.",
      "syntax": "<audio>...</audio>"
    },
    {
      "tag": "<video>",
      "description": "Embeds a media player which supports video files in the document.",
      "syntax": "<video>...</video>"
    },
    {
      "tag": "<figure>",
      "description": "Groups various diagrams, images, illustrations, and code snippets into the document.",
      "syntax": "<figure>...</figure>"
    },
    {
      "tag": "<figcaption>",
      "description": "Used to provide the caption of the content.",
      "syntax": "<figcaption>...</figcaption>"
    },
    {
      "tag": "<embed>",
      "description": "Embeds multimedia on a Web page.",
      "syntax": "<embed>...</embed>"
    },
    {
      "tag": "<object>",
      "description": "Includes objects, such as images, audio, videos, and Portable Document Format (PDF) on a Web page.",
      "syntax": "<object>...</object>"
    }
  ]
},
{
  "title": "Characters and Symbols",
  "description": "Special characters and symbols in HTML, like &amp; for an ampersand or &lt; for a less-than sign, are used to display characters that have special meaning in HTML. Some of the most commonly used ones are represented using entity names or number codes.",
   "category": "HTML",
  "icon": "🌐",
  "tips": [
    "Always use character entities when displaying reserved HTML characters like <, >, &, etc.",
    "Both named entities (like &copy;) and numeric codes (like &#169;) can be used.",
    "Use these symbols to avoid parsing errors and ensure proper rendering."
  ],
    "table": [
    {
      "symbol": "&copy;",  
      "entity_name": "&amp;copy;", 
      "description": "Copyright",
      "number_code": "&amp;#169;"
    },
    {
      "symbol": "&amp;",
      "description": "Ampersand",
      "entity_name": "&amp;amp;",
      "number_code": "&amp;#38;"
    },
    {
      "symbol": "&gt;",
      "description": "Greater than",
      "entity_name": "&amp;gt;",
      "number_code": "&amp;#62;"
    },
    {
      "symbol": "&lt;",
      "description": "Less than",
      "entity_name": "&amp;lt;",
      "number_code": "&amp;#60;"
    },
    {
      "symbol": "&dollar;",
      "description": "Dollar",
      "entity_name": "&amp;dollar;",
      "number_code": "&amp;#36;"
    },
    {
      "symbol": "&quot;",
      "description": "Quotation mark",
      "entity_name": "&amp;quot;",
      "number_code": "&amp;#34;"
    },
    {
      "symbol": "&apos;",
      "description": "Apostrophe",
      "entity_name": "&amp;apos;",
      "number_code": "&amp;#39;"
    }
  ]
},
{
  "title": "Attributes",
  "category": "HTML",
 "icon": "🌐",
  "description": "Attributes in HTML are used to provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like name=\"value\". The name is the property you want to set and the value is the desired value of the attribute.",
  "table": [
    {
      "tag": "alt",
      "description": "Used in the image tag to specify the alternative text of the image",
      "syntax": "<tag_name alt=\"...\">"
    },
    {
      "tag": "href",
      "description": "Used to define a hyperlink.",
      "syntax": "<tag_name href=\"...\">"
    },
    {
      "tag": "src",
      "description": "Specifies URL of the image to be used.",
      "syntax": "<tag_name src=\"...\">"
    },
    {
      "tag": "width",
      "description": "Specifies the width of the image in pixels.",
      "syntax": "<tag_name width=\"...\">"
    },
    {
      "tag": "height",
      "description": "Specifies the height of the image in pixels.",
      "syntax": "<tag_name height=\"...\">"
    },
    {
      "tag": "style",
      "description": "Helps to change the look and feel of the document.",
      "syntax": "<tag_name style=\"...\">"
    },
    {
      "tag": "id",
      "description": "Unique identifier used to specify an area of a webpage.",
      "syntax": "<tag_name id=\"...\">"
    },
    {
      "tag": "class",
      "description": "Specifies one or more class names for an element.",
      "syntax": "<tag_name class=\"...\">"
    },
    {
      "tag": "title",
      "description": "Specifies extra information about an element.",
      "syntax": "<tag_name title=\"...\">"
    },
    {
      "tag": "placeholder",
      "description": "Specifies a short hint that describes the expected value of an input field/text area",
      "syntax": "<tag_name placeholder=\" \">"
    }
  ]
},
{
  "title": "Link Tags",
  "description": "Link tags are used to define hyperlinks, which allow users to navigate between pages or sections within a webpage.",
   "category": "HTML",
  "icon": "🌐",
  "table": [
    {
      "tag": "<a>",
      "description": "Defines a hyperlink (used for linking to other pages or sections).",
      "syntax": "<a href=\"URL\">Link Text</a>"
    },
    {
      "tag": "<link>",
      "description": "Defines the relationship between the document and an external resource (usually for stylesheets)",
      "syntax": "<link rel=\"stylesheet\" href=\"style.css\">"
    }
  ]
},
{
  "title": "HTML Events Tags",
   "category": "HTML",
    "icon": "🌐",
  "description": "HTML events are used to execute code when certain actions or user interactions occur. These can be applied to most HTML tags.",
  "table": [
    {
      "tag": "onclick",
      "description": "Occurs when an element is clicked.",
      "syntax": "<button onclick=\"alert('Clicked!')\">Click Me</button>"
    },
    {
      "tag": "onmouseover",
      "description": "Occurs when the mouse pointer is moved over an element.",
      "syntax": "<div onmouseover=\"changeColor()\">Hover Me</div>"
    },
    {
      "tag": "onchange",
      "description": "Occurs when the value of an element changes.",
      "syntax": "<input type=\"text\" onchange=\"alert('Changed!')\">"
    },
    {
      "tag": "onload",
      "description": "Occurs when a page or image has loaded.",
      "syntax": "<img src=\"image.jpg\" onload=\"alert('Loaded!')\">"
    },
    {
      "tag": "onkeydown",
      "description": "Occurs when a key is pressed down.",
      "syntax": "<input type=\"text\" onkeydown=\"checkKey()\">"
    },
    {
      "tag": "onfocus",
      "description": "Occurs when an element gains focus.",
      "syntax": "<input type=\"text\" onfocus=\"this.style.background='yellow'\">"
    }
  ]
},
{
  "title": "Selectors",
  "icon": "🎨",
  "category": "CSS",
  "description": "Selectors: Used to find or select the HTML elements you want to style. These are categorized as follows:",
  "table": [
    {
      "tag": "Universal",
      "description": "Selects all elements on the pages.",
      "syntax": "* { property: value; }"
    },
    {
      "tag": "Type",
      "description": "Selects all HTML tag/element of given type in your document.",
      "syntax": "p { property: value; }"
    },
    {
      "tag": "Id",
      "description": "Selects an element based on the value of its unique id attribute.",
      "syntax": "#id { property: value; }"
    },
    {
      "tag": "Class",
      "description": "Selects all elements in the document that have the given class attribute.",
      "syntax": ".class { property: value; }"
    },
    {
      "tag": "Attribute",
      "description": "Selects all elements that have a specified attribute.",
      "syntax": "a[attribute=value] { property: value; }"
    },
    {
      "tag": "Combinators",
      "description": "Complex selectors consisting of more than one selectors having some relationship between them.",
      "syntax": "selector1 selector2 / selector1 + selector2 / selector1 > selector2 { property: value; }"
    },
    {
      "tag": "Pseudo",
      "description": "Define the special state of an element to add an effect to an existing element based on its states.",
      "syntax": "selector:pseudo-class { property: value; }"
    }
  ]
},
{
  "title": "Font Properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "CSS font properties are used to set the font's content of the HTML element as per requirement.",
  "table": [
    {
      "tag": "font-family",
      "description": "Specifies the font family to be used for the element's text content.",
      "syntax": "font-family: family-name | generic-family | initial | inherit;"
    },
    {
      "tag": "font-style",
      "description": "Styles the text content in a normal, italic, or oblique face from its font-family.",
      "syntax": "font-style: normal | italic | oblique | initial | inherit;"
    },
    {
      "tag": "font-variant",
      "description": "Converts all lowercase letters into uppercase letters.",
      "syntax": "font-variant: normal | small-caps | initial;"
    },
    {
      "tag": "font-weight",
      "description": "Specifies thickness or weight of the font.",
      "syntax": "font-weight: normal | bold | number | initial | inherit | unset;"
    },
    {
      "tag": "font-size",
      "description": "Specifies the size of the text in HTML document.",
      "syntax": "font-size: small | medium | large | initial | inherit;"
    }
  ]
},
{
  "title": "Text-properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "CSS text formatting properties are used to format and style text by setting their color, alignment, spacing, etc. as per requirement.",
  "table": [
    {
      "tag": "color",
      "description": "Sets the color of the text.",
      "syntax": "color: value;"
    },
    {
      "tag": "text-align",
      "description": "Defines the horizontal alignment of the text.",
      "syntax": "text-align: left | right | center | justify | initial | inherit;"
    },
    {
      "tag": "text-decoration",
      "description": "Add or remove text-decorations.",
      "syntax": "text-decoration: decoration-type;"
    },
    {
      "tag": "text-transform",
      "description": "Changes the case (uppercase/lowercase) of text.",
      "syntax": "text-transform: none | capitalize | uppercase | lowercase | initial | inherit;"
    },
    {
      "tag": "text-indent",
      "description": "Indents the first line of a text block.",
      "syntax": "text-indent: length | initial | inherit;"
    },
    {
      "tag": "letter-spacing",
      "description": "Specifies spacing between the characters of the text.",
      "syntax": "letter-spacing: normal | length | initial | inherit;"
    },
    {
      "tag": "line-height",
      "description": "Specifies the space between the lines of the text.",
      "syntax": "line-height: normal | number | length | percentage | initial | inherit;"
    },
    {
      "tag": "text-shadow",
      "description": "Adds shadow to the text.",
      "syntax": "text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit;"
    },
    {
      "tag": "word-spacing",
      "description": "Specifies space between words of lines.",
      "syntax": "word-spacing: normal | length | initial | inherit;"
    }
  ]
},{
  "title": "Background-properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "The CSS background properties are used to design the background and define the background effects for elements.",
  "table": [
    {
      "tag": "background-color",
      "description": "Specifies the background color of an element.",
      "syntax": "background-color: color_name;"
    },
    {
      "tag": "background-image",
      "description": "Adds one or more background images to an element.",
      "syntax": "background-image: url('url');"
    },
    {
      "tag": "background-repeat",
      "description": "Adds or removes repeat of the background image both horizontally and vertically.",
      "syntax": "background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit;"
    },
    {
      "tag": "background-position",
      "description": "Specifies the positioning of the image in a certain way.",
      "syntax": "background-position: value;"
    },
    {
      "tag": "background-origin",
      "description": "Used to adjust the background image of the webpage.",
      "syntax": "background-origin: padding-box | border-box | content-box | initial | inherit;"
    },
    {
      "tag": "background-attachment",
      "description": "Specifies the kind of attachment of the background image in its container.",
      "syntax": "background-attachment: scroll | fixed | local | initial | inherit;"
    },
    {
      "tag": "background-clip",
      "description": "Used to define how far the background (color or image) should extend.",
      "syntax": "background-clip: border-box | padding-box | content-box | initial | inherit;"
    }
  ]
},
{
  "title": "Box-properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "The CSS box model is essentially a box that wraps around every HTML element consisting of the border, padding, margin, and content. The CSS properties used to attain the box model are:",
  "table": [
    {
      "tag": "margin",
      "description": "Used to set the margin",
      "syntax": "margin: value;"
    },
    {
      "tag": "padding",
      "description": "Specifies the space between the border and the content of the selector.",
      "syntax": "padding: value;"
    },
    {
      "tag": "border",
      "description": "Sets the element's border width and set the style, and color of an element's border.",
      "syntax": "border: value;"
    },
    {
      "tag": "width",
      "description": "Used to set an element's width.",
      "syntax": "width: value;"
    },
    {
      "tag": "height",
      "description": "Used to set an element's height",
      "syntax": "height: value;"
    }
  ]
},
{
  "title": "Shadow-properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "These shadow properties are used to add shadow to text or boxes or frames of elements.",
  "table": [
    {
      "tag": "text-shadow",
      "description": "Adds shadow to text.",
      "syntax": "text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit;"
    },
    {
      "tag": "box-shadow",
      "description": "Gives shadow-like effect to the box or frames of an element.",
      "syntax": "box-shadow: h-offset v-offset blur spread color | none | inset | initial | inherit;"
    }
  ]
},
{
  "title": "Gradient",
  "icon": "🎨",
  "category": "CSS",
  "description": "The CSS gradient property is used to create transition between two or more specified colors.",
  "table": [
    {
      "tag": "linear-gradient",
      "description": "Creates smooth color transitions.",
      "syntax": "background-image: linear-gradient(direction, color-stop1, color-stop2, ...);"
    },
    {
      "tag": "radial-gradient",
      "description": "Used to obtain an elliptical shape gradient.",
      "syntax": "background-image: radial-gradient(shape size at position, start-color, ..., last-color);"
    }
  ]
},
{
  "title": "Border Properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "The CSS border properties allow you to specify how the border of the box representing an element should look.",
  "table": [
    {
      "tag": "border-color",
      "description": "Specifies the color of the border of the box. Works only when the border-style property is defined.",
      "syntax": "border-color: color-value;"
    },
    {
      "tag": "border-style",
      "description": "Sets the style of the border as solid, dotted, rigged, etc.",
      "syntax": "border-style: value;"
    },
    {
      "tag": "border-width",
      "description": "Sets the width of the border of the element.",
      "syntax": "border-width: length | thin | medium | thick | initial | inherit;"
    }
  ]
},
{
  "title": "Classification Properties",
  "icon": "🎨",
  "category": "CSS",
  "description": "The CSS classification properties allow you to specify how and where an element is displayed.",
  "table": [
    {
      "tag": "display",
      "description": "Defines how elements are displayed in the web page.",
      "syntax": "display: inline | block | flex | grid | table | group | none | inherit;"
    },
    {
      "tag": "float",
      "description": "Defines flow of content.",
      "syntax": "float: none | left | right | initial | inherit;"
    },
    {
      "tag": "position",
      "description": "Specifies the positioning method of html entity on the web page.",
      "syntax": "position: fixed | static | absolute | relative | sticky;"
    },
    {
      "tag": "clear",
      "description": "Sets the sides of an element where no other floating elements are allowed.",
      "syntax": "clear: left | right | both | none;"
    },
    {
      "tag": "visibility",
      "description": "Set an element as visible or not.",
      "syntax": "visibility: visible | hidden | collapse | initial | inherit;"
    },
    {
      "tag": "cursor",
      "description": "Specifies the type or shape of cursor.",
      "syntax": "cursor: auto | default | pointer | crosshair | help | e-resize | all-scroll | progress | initial | inherit;"
    }
  ]
},
{
  "title": "CSS Functions",
  "icon": "🎨",
  "category": "CSS",
  "description": "CSS has a range of inbuilt functions used as values for various CSS properties, ranging from simple color functions to mathematical, shape, color, transform, gradient, and animation functions.",
  "table": [
    {
      "tag": "attr()",
      "description": "Retrieves the value of an attribute of the selected elements.",
      "syntax": "attr(attr_name);"
    },
    {
      "tag": "calc()",
      "description": "Takes a single mathematical expression as its parameter and performs operations.",
      "syntax": "calc(Expression);"
    },
    {
      "tag": "max()",
      "description": "Returns the largest number of the given set of comma-separated numbers.",
      "syntax": "max(value1, value2, value3...)"
    },
    {
      "tag": "url()",
      "description": "Takes a string URL as a parameter and is used to load images, fonts and content.",
      "syntax": "url(<string> <url-modifier>*);"
    },
    {
      "tag": "var()",
      "description": "Inserts the value of a custom property. Its name must start with two dashes (--).",
      "syntax": "var(--custom_property, fallback_value);"
    }
  ]
},
{
  "title": "Media Queries",
  "icon": "🎨",
  "category": "CSS",
  "description": "The CSS Media Query is used to make the web page more responsive according to different screens or media types. Media queries include a block of CSS only if a certain expression is true.",
  "code": "@media not | only mediatype and (expression) {\n    /* CSS rules */\n}",
  "table": [
    {
      "mediaType": "All",
      "description": "It is used for all media devices."
    },
    {
      "mediaType": "Print",
      "description": "It is used when printer is in use."
    },
    {
      "mediaType": "Screen",
      "description": "It is used for computer screens, smartphones etc."
    },
    {
      "mediaType": "Speech",
      "description": "It is used for screen readers that read the screen aloud."
    }
  ]
},
{
  "title": "Fundamentals",
  "category": "JavaScript",
   "icon": "⚡️",
  "description": "To use JavaScript on a website, attach the JavaScript file to the HTML file. Enclose the code within the <script> tag for the browser to recognize and execute it.",
  "content": [
    {
      "type": "code",
      "language": "html",
      "title": "Inline Script",
      "code": "<script type=\"text/javascript\">\n  // Your JavaScript code\n</script>"
    },
    {
      "type": "code",
      "language": "html",
      "title": "External File",
      "code": "<script src=\"filename.js\"></script>"
    },
    {
      "type": "text",
      "title": "Comments in JavaScript",
      "text": "JavaScript comments help explain and improve code readability."
    },
    {
      "type": "list",
      "title": "Types of Comments",
      "items": [
        "Single-line comments: Start with `//`.",
        "Multi-line comments: Wrap text in `/* */`."
      ]
    }
  ]
},
{
    "title": "Variables",
    "category": "JavaScript",
      "icon": "⚡️",
    "description": "Variables in JavaScript are containers for storing data. JavaScript allows the usage of variables in the following three ways.",
    "table": [
      {
        "tag": "var",
        "description": "Used to initialize to value, can be redeclared and reassigned.",
        "syntax": "var x = value;"
      },
      {
        "tag": "let",
        "description": "Similar to var but is block scoped.",
        "syntax": "let y = value;"
      },
      {
        "tag": "const",
        "description": "Used to declare a fixed value that cannot be changed.",
        "syntax": "const z = value;"
      }
    ]
  },
  {
    "title": "Datatypes",
    "category": "JavaScript",
       "icon": "⚡️",
    "description": "In JavaScript, data types define the type of value a variable can hold. Understanding the types is crucial for evaluating expressions and ensuring correct operations. JavaScript has both primitive and non-primitive data types.",
    "table": [
      {
        "tag": "Number",
        "description": "Numeric values; can be real numbers or integers.",
        "syntax": "var x = 42;"
      },
      {
        "tag": "String",
        "description": "A sequence of characters enclosed in quotes.",
        "syntax": "var x = \"Hello World\";"
      },
      {
        "tag": "Boolean",
        "description": "Represents logical true or false.",
        "syntax": "var x = true;"
      },
      {
        "tag": "Null",
        "description": "A special value representing no value.",
        "syntax": "var x = null;"
      },
      {
        "tag": "Undefined",
        "description": "A variable declared but not assigned a value.",
        "syntax": "let x; // or let x = undefined;"
      },
      {
        "tag": "Object",
        "description": "Used to store a collection of key-value pairs.",
        "syntax": "var x = { key1: \"value1\", key2: \"value2\" };"
      },
      {
        "tag": "Array",
        "description": "Stores multiple values in a single variable.",
        "syntax": "var x = [\"y1\", \"y2\", \"y3\", \"y4\"];"
      },
      {
        "tag": "Function",
        "description": "Block of reusable code.",
        "syntax": "function x(arguments) {\n  // block of code\n}"
      }
    ]
  },
  {
    "title": "Operators",
    "category": "JavaScript",
       "icon": "⚡️",
    "description": "JavaScript operators are symbols used to perform various operations on variables. The types of operators include arithmetic, comparison, bitwise, logical, and assignment operators.",
    "table": [
      {
        "tag": "Arithmetic",
        "description": "Performs basic arithmetic operations.",
        "syntax": "+, -, *, /, %, ++, --"
      },
      {
        "tag": "Comparison",
        "description": "Compares two values.",
        "syntax": "==, ===, !=, >, <, >=, <="
      },
      {
        "tag": "Bitwise",
        "description": "Performs bit-level operations.",
        "syntax": "&, |, ^, ~, <<, >>, >>>"
      },
      {
        "tag": "Logical",
        "description": "Logical operations (AND, OR, NOT).",
        "syntax": "exp1 && exp2, exp1 || exp2, !exp"
      },
      {
        "tag": "Assignment",
        "description": "Assigns values to variables.",
        "syntax": "=, +=, -=, *=, /=, %="
      }
    ]
  },
  {
  "title": "Scope and Scope Chain",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "Scope determines where a variable is accessible in your program. It defines the context in which variables can be referenced or modified. JavaScript has three main types of scope:\n\n- **Function Scope**: Variables declared inside a function are only accessible within that function.\n- **Global Scope**: Variables declared outside any function are accessible throughout the program.\n- **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., loops or conditionals) are only accessible within that block.",
  "note": "**Scope Chain**:\n\nThe scope chain helps the JavaScript engine resolve variable references by searching through the current scope and its outer scopes (from local to global).\n- If a variable isn't found in the current scope, the engine looks in outer scopes until it either finds the variable or reaches the global scope.\n- If it cannot find the variable, it either declares it in the global scope (non-strict mode) or throws an error (strict mode).",
  "code": "let a = 10;\n\nfunction example() {\n    let b = 20; // Function scope\n\n    if (true) {\n        var c = 30; // Function scope (var)\n        const d = 40; // Block scope\n    }\n\n    console.log(a); // Global scope: 10\n    console.log(b); // Function scope: 20\n    console.log(c); // Function scope (due to var): 30\n    console.log(d); // ❌ Error: d is not defined outside block\n}\n\nexample();",
},
{
  "title": "Functions",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "A JavaScript function is a block of code designed to perform a particular task. It is executed when invoked or called. Instead of writing the same piece of code again and again, you can put it in a function and invoke it when required. JavaScript functions can be created using the `function` keyword.",
  "table": [
    {
      "tag": "parseInt()",
      "description": "Parses an argument passed to it and returns an integral number.",
      "syntax": "parseInt('123.45') // 123"
    },
    {
      "tag": "parseFloat()",
      "description": "Parses the argument and returns a floating-point number.",
      "syntax": "parseFloat('123.45') // 123.45"
    },
    {
      "tag": "isNaN()",
      "description": "Determines if a given value is Not a Number.",
      "syntax": "isNaN('abc') // true"
    },
    {
      "tag": "Number()",
      "description": "Returns an argument after converting it to a number.",
      "syntax": "Number('123') // 123"
    },
    {
      "tag": "eval()",
      "description": "Used for evaluating JavaScript programs presented as strings.",
      "syntax": "eval('2 + 2') // 4"
    },
    {
      "tag": "prompt()",
      "description": "Creates a dialogue box for taking input from the user.",
      "syntax": "prompt('Enter your name:')"
    },
    {
      "tag": "encodeURI()",
      "description": "Encodes a URI into a UTF-8 encoding scheme.",
      "syntax": "encodeURI('https://example.com/?search=hello world')"
    },
    {
      "tag": "match()",
      "description": "Used to search a string for a match against a regular expression.",
      "syntax": "'abc123'.match(/\\d+/) // ['123']"
    }
  ]
},
{
  "title": "Arrays",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "In JavaScript, an array is a single variable used to store multiple elements. Arrays are often used to hold lists and allow element access using numeric indexes.",
  "table": [
    {
      "tag": "var House = [];",
      "description": "Declares an empty array using array literal syntax.",
      "syntax": "var House = [];"
    },
    {
      "tag": "var House = new Array();",
      "description": "Declares an empty array using the Array constructor.",
      "syntax": "var House = new Array();"
    },
    {
      "tag": "push()",
      "description": "Adds a new element to the end of the array.",
      "syntax": "array.push(element)"
    },
    {
      "tag": "pop()",
      "description": "Removes the last element from the array.",
      "syntax": "array.pop()"
    },
    {
      "tag": "concat()",
      "description": "Joins two or more arrays into one.",
      "syntax": "array1.concat(array2)"
    },
    {
      "tag": "shift()",
      "description": "Removes the first element from the array.",
      "syntax": "array.shift()"
    },
    {
      "tag": "unShift()",
      "description": "Adds new elements at the beginning of the array.",
      "syntax": "array.unshift(element)"
    },
    {
      "tag": "reverse()",
      "description": "Reverses the order of elements in the array.",
      "syntax": "array.reverse()"
    },
    {
      "tag": "slice()",
      "description": "Returns a shallow copy of a portion of the array.",
      "syntax": "array.slice(start, end)"
    },
    {
      "tag": "splice()",
      "description": "Adds/removes elements at a specified index.",
      "syntax": "array.splice(start, deleteCount, item1, ...)"
    },
    {
      "tag": "toString()",
      "description": "Converts array to a string of comma-separated values.",
      "syntax": "array.toString()"
    },
    {
      "tag": "valueOf()",
      "description": "Returns the primitive value of the array.",
      "syntax": "array.valueOf()"
    },
    {
      "tag": "indexOf()",
      "description": "Returns the first index of a specified element.",
      "syntax": "array.indexOf(element)"
    },
    {
      "tag": "lastIndexOf()",
      "description": "Returns the last index of a specified element.",
      "syntax": "array.lastIndexOf(element)"
    },
    {
      "tag": "join()",
      "description": "Joins all elements into a string.",
      "syntax": "array.join(separator)"
    },
    {
      "tag": "sort()",
      "description": "Sorts the elements of an array.",
      "syntax": "array.sort(compareFunction)"
    }
  ]
},
{
  "title": "Loops",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "Loops allow repeated execution of a block of code as long as a specified condition is true. JavaScript supports several loop types to handle different iteration needs.",
  "table": [
    {
      "tag": "for",
      "description": "Loops over a block of code with conditions specified in the beginning.",
      "syntax": "for (initialization; condition; increment/decrement) {\n    // statements\n}"
    },
    {
      "tag": "while",
      "description": "Entry control loop which executes only after checking the condition.",
      "syntax": "while (condition) {\n    // loop statements\n}"
    },
    {
      "tag": "do-while",
      "description": "Exit control loop which executes once before checking the condition.",
      "syntax": "do {\n    // statements\n} while (condition);"
    },
    {
      "tag": "for-in",
      "description": "Iterates over the enumerable properties of an object.",
      "syntax": "for (variable in object) {\n    // statements\n}"
    }
  ]
},
{
  "title": "If-Else",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "The if-else statement in JavaScript is used to execute a block of code based on a specified condition. If the condition evaluates to true, the code inside the 'if' block runs. Otherwise, the code inside the 'else' block is executed. JavaScript also supports nested if statements.",
  "code": "if (condition) {\n    // code to be executed if condition is true\n} else {\n    // code to be executed if condition is false\n}",
},
{
  "title": "Strings",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "Strings in JavaScript are primitive and immutable data types used for storing and manipulating text. They can contain zero or more characters including letters, numbers, or symbols. JavaScript offers various built-in methods for string operations.",
  "table": [
    {
      "tag": "concat()",
      "description": "Concatenates multiple strings into a single string.",
      "syntax": "string1.concat(string2, ..., stringN)"
    },
    {
      "tag": "match()",
      "description": "Finds matches of a string against a provided pattern.",
      "syntax": "string.match(regexp)"
    },
    {
      "tag": "replace()",
      "description": "Finds and replaces a specified value with another value in a string.",
      "syntax": "string.replace(searchValue, newValue)"
    },
    {
      "tag": "substr()",
      "description": "Extracts a substring from a string starting at a specified index and for a specified number of characters.",
      "syntax": "string.substr(start, length)"
    },
    {
      "tag": "slice()",
      "description": "Extracts a section of a string and returns it as a new string.",
      "syntax": "string.slice(startIndex, endIndex)"
    },
    {
      "tag": "lastIndexOf()",
      "description": "Returns the position of the last occurrence of a specified value.",
      "syntax": "string.lastIndexOf(searchValue)"
    },
    {
      "tag": "charAt()",
      "description": "Returns the character at a specified index.",
      "syntax": "string.charAt(index)"
    },
    {
      "tag": "valueOf()",
      "description": "Returns the primitive value of a String object.",
      "syntax": "string.valueOf()"
    },
    {
      "tag": "split()",
      "description": "Splits a string into an array of substrings.",
      "syntax": "string.split(separator)"
    },
    {
      "tag": "toUpperCase()",
      "description": "Converts the string to uppercase letters.",
      "syntax": "string.toUpperCase()"
    },
    {
      "tag": "toLowerCase()",
      "description": "Converts the string to lowercase letters.",
      "syntax": "string.toLowerCase()"
    }
  ]
},
{
  "title": "Regular Expressions",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "A regular expression is a sequence of characters that defines a search pattern. It is primarily used for pattern matching with strings, such as validating input or searching and replacing text.",
  "table": [
    {
      "tag": "[abc]",
      "description": "Find any of the characters inside the brackets",
      "syntax": "/[abc]/"
    },
    {
      "tag": "[0-9]",
      "description": "Find any digit from 0 to 9",
      "syntax": "/[0-9]/"
    },
    {
      "tag": "(x|y)",
      "description": "Find either x or y",
      "syntax": "/(x|y)/"
    },
    {
      "tag": ".",
      "description": "Matches any single character except newline or line terminator",
      "syntax": "/./"
    },
    {
      "tag": "\\d",
      "description": "Matches any digit character",
      "syntax": "/\\d/"
    },
    {
      "tag": "\\s",
      "description": "Matches any whitespace character",
      "syntax": "/\\s/"
    },
    {
      "tag": "\\uxxxx",
      "description": "Matches the Unicode character specified by the hexadecimal number",
      "syntax": "/\\u0041/" 
    }
  ]
},
{
  "title": "Quantifiers",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "Quantifiers in regular expressions specify how many instances of a character, group, or character class must be present in the input for a match to be found.",
  "table": [
    {
      "tag": "n+",
      "description": "Matches any string that contains at least one 'n'",
      "syntax": "/n+/"
    },
    {
      "tag": "n*",
      "description": "Matches any string that contains zero or more occurrences of 'n'",
      "syntax": "/n*/"
    },
    {
      "tag": "n?",
      "description": "Matches any string that contains zero or one occurrence of 'n'",
      "syntax": "/n?/"
    },
    {
      "tag": "n{x}",
      "description": "Matches strings that contain exactly x occurrences of 'n'",
      "syntax": "/n{3}/"
    },
    {
      "tag": "^n",
      "description": "Matches any string where 'n' is at the beginning",
      "syntax": "/^n/"
    }
  ]
},
{
  "title": "Data Transformation",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "Data transformation converts data from one format to another. It is often achieved using higher-order functions like map(), filter(), and reduce(), which take functions as input and return transformed output.",
  "table": [
    {
      "tag": "map()",
      "description": "Iterates over an array and calls a function on every element of the array.",
      "syntax": "array.map(function(currentValue, index, arr), thisValue)"
    },
    {
      "tag": "filter()",
      "description": "Creates a new array from a given array after applying a condition.",
      "syntax": "array.filter(callback(element, index, arr), thisValue)"
    },
    {
      "tag": "reduce()",
      "description": "Reduces the array to a single value using a function.",
      "syntax": "array.reduce(function(total, currentValue, currentIndex, arr), initialValue)"
    }
  ]
},
{
  "title": "Date Objects",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "The Date object is a built-in JavaScript type used for handling dates and times. Date objects are created using the new Date() constructor and can be manipulated using various methods.",
  "table": [
    {
      "tag": "getDate()",
      "description": "Returns the day of the month (1–31).",
      "syntax": "date.getDate()"
    },
    {
      "tag": "getTime()",
      "description": "Returns the number of milliseconds since January 1, 1970.",
      "syntax": "date.getTime()"
    },
    {
      "tag": "getMinutes()",
      "description": "Returns the minutes (0–59).",
      "syntax": "date.getMinutes()"
    },
    {
      "tag": "getFullYear()",
      "description": "Returns the four-digit year (e.g., 2025).",
      "syntax": "date.getFullYear()"
    },
    {
      "tag": "getDay()",
      "description": "Returns the day of the week (0–6), where 0 is Sunday.",
      "syntax": "date.getDay()"
    },
    {
      "tag": "parse()",
      "description": "Parses a date string and returns the number of milliseconds since January 1, 1970.",
      "syntax": "Date.parse(dateString)"
    },
    {
      "tag": "setDate()",
      "description": "Sets the day of the month (1–31).",
      "syntax": "date.setDate(day)"
    },
    {
      "tag": "setTime()",
      "description": "Sets the time in milliseconds since January 1, 1970.",
      "syntax": "date.setTime(milliseconds)"
    }
  ]
},
{
  "title": "DOM",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "DOM stands for Document Object Model. It defines the logical structure of HTML documents and provides a way to access and manipulate them using JavaScript. JavaScript interacts with DOM elements as objects, allowing dynamic changes to the page structure, style, and content.",
  "table": [
    {
      "tag": "appendChild()",
      "description": "Adds a new child node as the last child of a parent node.",
      "syntax": "parentNode.appendChild(newNode)"
    },
    {
      "tag": "cloneNode()",
      "description": "Creates a copy of an HTML element node.",
      "syntax": "element.cloneNode(deep)"
    },
    {
      "tag": "hasAttributes()",
      "description": "Checks if the element has any attributes.",
      "syntax": "element.hasAttributes()"
    },
    {
      "tag": "removeChild()",
      "description": "Removes a child node from a parent node.",
      "syntax": "parentNode.removeChild(childNode)"
    },
    {
      "tag": "getAttribute()",
      "description": "Retrieves the value of a specified attribute from an element.",
      "syntax": "element.getAttribute(attributeName)"
    },
    {
      "tag": "getElementsByTagName()",
      "description": "Returns a live HTMLCollection of elements with the given tag name.",
      "syntax": "document.getElementsByTagName(tagName)"
    },
    {
      "tag": "isEqualNode()",
      "description": "Checks if two nodes are equal (have the same structure and attributes).",
      "syntax": "node1.isEqualNode(node2)"
    }
  ]
},
{
  "title": "Numbers and Math",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "JavaScript provides various properties and methods to deal with Numbers and Math. Number properties include MAX_VALUE, MIN_VALUE, NaN (Not-a-Number), NEGATIVE_INFINITY, and POSITIVE_INFINITY. These methods allow formatting, rounding, and converting numeric values.",
  "table": [
    {
      "tag": "valueOf()",
      "description": "Returns a number in its original form (primitive value).",
      "syntax": "number.valueOf()"
    },
    {
      "tag": "toString()",
      "description": "Returns a string representation of a number in a specified base.",
      "syntax": "number.toString(base)"
    },
    {
      "tag": "toFixed()",
      "description": "Formats a number using fixed-point notation.",
      "syntax": "number.toFixed(digits)"
    },
    {
      "tag": "toPrecision()",
      "description": "Formats a number to a specified length (total digits).",
      "syntax": "number.toPrecision(length)"
    },
    {
      "tag": "toExponential()",
      "description": "Returns a string representing the number in exponential notation.",
      "syntax": "number.toExponential(fractionDigits)"
    },
    {
      "tag": "max(x, y, z...n)",
      "description": "Returns the highest-valued number.",
      "syntax": "Math.max(x, y, z, ..., n)"
    },
    {
      "tag": "min(x, y, z...n)",
      "description": "Returns the lowest-valued number.",
      "syntax": "Math.min(x, y, z, ..., n)"
    },
    {
      "tag": "exp(x)",
      "description": "Returns x's exponential value.",
      "syntax": "Math.exp(x)"
    },
    {
      "tag": "log(x)",
      "description": "Returns the natural logarithm (base E) of x.",
      "syntax": "Math.log(x)"
    },
    {
      "tag": "sqrt(x)",
      "description": "Returns x's square root value.",
      "syntax": "Math.sqrt(x)"
    },
    {
      "tag": "pow(x, y)",
      "description": "Returns the value of x to the power of y.",
      "syntax": "Math.pow(x, y)"
    },
    {
      "tag": "round(x)",
      "description": "Rounds the value of x to the nearest integer.",
      "syntax": "Math.round(x)"
    },
    {
      "tag": "sin(x)",
      "description": "Finds the sine value of x (x is in radians).",
      "syntax": "Math.sin(x)"
    },
    {
      "tag": "tan(x)",
      "description": "Finds the tangent value of the angle x.",
      "syntax": "Math.tan(x)"
    }
  ]
},
{
  "title": "Events",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "JavaScript uses events to provide dynamic interactions on webpages. Events are actions or occurrences that happen in the system you are programming for, which the system tells you about so your code can respond to them. These events are typically tied to DOM elements.",
  "table": [
    {
      "tag": "onclick()",
      "description": "Triggers an event when an element is clicked.",
      "syntax": "element.onclick = function() { /* code */ };"
    },
    {
      "tag": "onkeyup()",
      "description": "Executes instructions whenever a key is released after pressing.",
      "syntax": "element.onkeyup = function() { /* code */ };"
    },
    {
      "tag": "onmouseover()",
      "description": "Triggers an event when the mouse pointer is hovered over an element.",
      "syntax": "element.onmouseover = function() { /* code */ };"
    },
    {
      "tag": "onmouseout()",
      "description": "Triggers an event when the mouse pointer is moved away from an element.",
      "syntax": "element.onmouseout = function() { /* code */ };"
    },
    {
      "tag": "onchange()",
      "description": "Detects changes in the value of input elements.",
      "syntax": "element.onchange = function() { /* code */ };"
    },
    {
      "tag": "onload()",
      "description": "Evokes an event when an element is completely loaded.",
      "syntax": "window.onload = function() { /* code */ };"
    },
    {
      "tag": "onfocus()",
      "description": "Triggers when an element gains focus.",
      "syntax": "element.onfocus = function() { /* code */ };"
    },
    {
      "tag": "onblur()",
      "description": "Evokes an event when an element loses focus.",
      "syntax": "element.onblur = function() { /* code */ };"
    },
    {
      "tag": "onsubmit()",
      "description": "Evokes an event when a form is submitted.",
      "syntax": "form.onsubmit = function(event) { /* code */ };"
    },
    {
      "tag": "ondrag()",
      "description": "Invokes an event when an element is dragged.",
      "syntax": "element.ondrag = function(event) { /* code */ };"
    },
    {
      "tag": "oninput()",
      "description": "Triggers when an input field receives any input.",
      "syntax": "element.oninput = function() { /* code */ };"
    }
  ]
},
{
  "title": "Error Handling",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "When executing JavaScript code, errors may occur due to syntax issues, incorrect logic, or faulty input. JavaScript provides structured error-handling mechanisms to gracefully handle these errors and continue program execution.",
  "table": [
    {
      "tag": "try",
      "description": "Tests a block of code to check for errors.",
      "syntax": "try {\n  // code that may throw an error\n}"
    },
    {
      "tag": "catch",
      "description": "Handles the error if any are present.",
      "syntax": "catch(error) {\n  // code to handle the error\n}"
    },
    {
      "tag": "throw",
      "description": "Allows construction of new errors.",
      "syntax": "throw new Error('Something went wrong');"
    },
    {
      "tag": "finally",
      "description": "Executes code after try and catch, regardless of the result.",
      "syntax": "finally {\n  // code to always run\n}"
    }
  ]
},
{
  "title": "Window Object",
  "category": "JavaScript",
  "icon": "⚡️",
  "description": "The window object is the topmost object in the DOM hierarchy. It represents an open window in a browser and provides methods and properties for interacting with the browser window.",
  "table": [
    {
      "tag": "window",
      "description": "Returns the current window or frame.",
      "syntax": "window.window"
    },
    {
      "tag": "screen",
      "description": "Returns the window's Screen object.",
      "syntax": "window.screen"
    },
    {
      "tag": "toolbar",
      "description": "Creates a toolbar object, whose visibility can be toggled in the window.",
      "syntax": "window.toolbar"
    },
    {
      "tag": "navigator",
      "description": "Returns the window's Navigator object.",
      "syntax": "window.navigator"
    },
    {
      "tag": "frames[]",
      "description": "Returns all <iframe> elements in the current window.",
      "syntax": "window.frames[index]"
    },
    {
      "tag": "document",
      "description": "Returns a reference to the document object.",
      "syntax": "window.document"
    },
    {
      "tag": "closed",
      "description": "Boolean used to check whether the window is closed or not.",
      "syntax": "window.closed"
    },
    {
      "tag": "length",
      "description": "Represents the number of frames in the current window.",
      "syntax": "window.length"
    },
    {
      "tag": "history",
      "description": "Provides the window's History object.",
      "syntax": "window.history"
    },
    {
      "tag": "alert()",
      "description": "Shows a message and an OK button in an alert box.",
      "syntax": "window.alert('Message');"
    },
    {
      "tag": "print()",
      "description": "Prints the current window's content.",
      "syntax": "window.print();"
    },
    {
      "tag": "blur()",
      "description": "Removes the current window's focus.",
      "syntax": "window.blur();"
    },
    {
      "tag": "setTimeout()",
      "description": "Evaluates an expression after a specified time interval.",
      "syntax": "window.setTimeout(function, milliseconds);"
    },
    {
      "tag": "clearTimeout()",
      "description": "Removes the timer that was set with setTimeout().",
      "syntax": "window.clearTimeout(timeoutID);"
    },
    {
      "tag": "setInterval()",
      "description": "Evaluates an expression at intervals defined by the user.",
      "syntax": "window.setInterval(function, milliseconds);"
    },
    {
      "tag": "prompt()",
      "description": "Shows a conversation window asking for feedback from the visitor.",
      "syntax": "window.prompt('Enter value:');"
    },
    {
      "tag": "close()",
      "description": "Closes the currently open window.",
      "syntax": "window.close();"
    },
    {
      "tag": "focus()",
      "description": "Sets the current window's focus.",
      "syntax": "window.focus();"
    },
    {
      "tag": "resizeTo()",
      "description": "Resizes the window to the width and height supplied.",
      "syntax": "window.resizeTo(width, height);"
    }
  ]
},
{
  "title": "React Elements",
  "category": "ReactJs",
  "icon": "⚛️",
  "description": "React elements are the building blocks of React applications. Unlike DOM elements, React elements are plain JavaScript objects that describe what should appear on the screen. They are immutable and more efficient to create and render.",
  "table": [
    {
      "tag": "Class Element Attributes",
      "description": "Passes attributes to an element. The major change is that `class` is changed to `className`.",
      "syntax": "<div className=\"exampleclass\"></div>"
    },
    {
      "tag": "Style Element Attributes",
      "description": "Adds custom styling. We have to pass values in double curly braces `{{}}`.",
      "syntax": "<div style={{styleName: 'value'}}></div>"
    },
    {
      "tag": "Fragments",
      "description": "Used to group multiple elements without adding an extra node to the DOM.",
      "syntax": "<> {/* Other components */} </>"
    }
  ]
},
{
      "title": "ReactJS Import and Export",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "In ReactJS, we use importing and exporting to import already created modules and export our own components and modules respectively.",
      "table": [
        { "tag": "Importing Default exports", "description": "Imports the default export from modules", "syntax": "import MOD_NAME from 'PATH'" },
        { "tag": "Importing Named Values", "description": "Imports the named export from modules", "syntax": "import {NAME} from 'PATH'" },
        { "tag": "Multiple imports", "description": "Used to import multiple modules, can be user-defined or npm packages", "syntax": "import MOD_NAME, {NAME} from 'PATH'" },
        { "tag": "Default Exports", "description": "Creates one default export. Each component can have one default export", "syntax": "export default MOD_NAME" },
        { "tag": "Named Exports", "description": "Creates Named Exports when there are multiple components in a single module", "syntax": "export const NAME" },
        { "tag": "Multiple Exports", "description": "Exports multiple named components", "syntax": "export {NAME1, NAME2}" }
      ]
    },
    {
      "title": "React Components",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "A Component is one of the core building blocks of React. Components in React basically return a piece of JSX code that tells what should be rendered on the screen.",
      "table": [
        { "tag": "Functional", "description": "Simple JS functions and are stateless", "syntax": "function demoComponent() { return (<> // CODE </>); }" },
        { "tag": "Class-based", "description": "Uses JS classes to create stateful components", "syntax": "class DemoComponent extends React.Component { render() { return <> //CODE </>; } }" },
        { "tag": "Nested", "description": "Creates component inside another component", "syntax": "function demoComponent() { return (<> <Another_Component/> </>); }" }
      ]
    },
    {
      "title": "Managing Data Inside and Outside Components (State and Props)",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "Props are read-only data passed between components, while state is mutable and maintained within the component.",
      "table": [
        { "tag": "props", "description": "Passes data between components and is read-only", "Syntax": "// Passing\n<Comp prop_name=\"VAL\"/>\n\n// Accessing\n{props.prop_name}" },
        { "tag": "state", "description": "Manages data inside a component and is mutable", "Syntax": "constructor(props) { super(props); this.state = { var: value }; }" },
        { "tag": "setState", "description": "Updates the value of a state using callback function", "Syntax": "this.setState((prevState) => ({ // logic }))" }
      ]
    },
    {
      "title": "Lifecycle of Components",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "The lifecycle methods in ReactJS are used to control the components at different stages from initialization till unmounting.",
      "table": [
        { "tag": "constructor", "description": "Runs before component rendering", "syntax": "constructor(props) {}" },
        { "tag": "render", "description": "Used to render the component", "syntax": "render()" },
        { "tag": "componentDidMount", "description": "Runs after component is rendered", "syntax": "componentDidMount()" },
        { "tag": "componentWillUnmount", "description": "Runs before a component is removed from DOM", "syntax": "componentWillUnmount()" },
        { "tag": "componentDidCatch", "description": "Used to catch errors in component", "syntax": "componentDidCatch()" }
      ]
    },
    {
      "title": "Updating Phase Methods",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "These methods help track and control what happens when a component updates.",
      "table": [
        { "tag": "componentDidUpdate", "description": "Invokes after component is updated", "syntax": "componentDidUpdate(prevProp, prevState, snap)" },
        { "tag": "shouldComponentUpdate", "description": "Used to avoid unnecessary re-renders", "syntax": "shouldComponentUpdate(newProp, newState)" },
        { "tag": "render", "description": "Render component after update", "syntax": "render()" }
      ]
    },
    {
      "title": "Conditional Rendering",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "Conditional rendering is used to render components based on some condition.",
      "table": [
        { "tag": "if-else", "description": "Render component using if-else block", "syntax": "if (condition) { return <COMP1 />; } else { return <COMP2 />; }" },
        { "tag": "Logical && Operator", "description": "Used for showing/hiding single component", "syntax": "{condition && <Component />}" },
        { "tag": "Ternary Operator", "description": "Compact conditional rendering", "syntax": "{condition ? <COMP1/> : <COMP2/>}" }
      ]
    },
    {
      "title": "React DOM Events",
      "category": "ReactJs",
      "icon": "⚛️",
      "description": "React DOM events are similar to HTML events, used to perform actions on user interactions.",
      "table": [
        { "tag": "Click", "description": "Triggers an event on click", "syntax": "<button onClick={func}>CONTENT</button>" },
        { "tag": "Change", "description": "Triggers when some change is detected", "syntax": "<input onChange={handleChange} />" },
        { "tag": "Submit", "description": "Triggers when form is submitted", "syntax": "<form onSubmit={(e) => {//LOGIC}}></form>" }
      ]
    },
    {
      "title": "React Hooks",
      "category": "ReactJs",
    "icon": "⚛️",
      "description": "Hooks give functional components access to state and lifecycle features without writing class components.",
      "table": [
        { "tag": "useState", "description": "Declares state variable inside function", "syntax": "const [var, setVar] = useState(initialVal);" },
        { "tag": "useEffect", "description": "Handles side effects in React", "syntax": "useEffect(() => { /* logic */ }, [dependencies])" },
        { "tag": "useRef", "description": "Creates reference to DOM element", "syntax": "const refContainer = useRef(initialValue);" },
        { "tag": "useMemo", "description": "Returns a memoized value", "syntax": "const memVal = useMemo(() => calcFunc(), [dependencies]);" }
      ]
    },
    {
      "title": "PropTypes",
      "category": "ReactJs",
     "icon": "⚛️",
      "description": "PropTypes are used to check types of props passed into components, helpful in large-scale applications.",
      "table": [
        { "tag": "String", "description": "PropTypes.string", "syntax": "\"Geeks\"" },
        { "tag": "Number", "description": "PropTypes.number", "syntax": "15" },
        { "tag": "Boolean", "description": "PropTypes.bool", "syntax": "true" },
        { "tag": "Function", "description": "PropTypes.func", "syntax": "() => 'Hello'" },
        { "tag": "Array", "description": "PropTypes.array", "syntax": "[]" },
        { "tag": "Array of numbers", "description": "PropTypes.arrayOf(PropTypes.number)", "syntax": "[15,16,17]" },
        { "tag": "Object", "description": "PropTypes.object", "syntax": "{ course: 'DSA' }" },
        { "tag": "Object Shape", "description": "PropTypes.shape({course: PropTypes.string, price: PropTypes.number})", "syntax": "{ course: 'DSA', price: 100 }" }
      ]
    },
    {
  "icon": "🌊",
  "category": "TailwindCSS",
  "title": "Container",
  "description": "Apply the max-width of an element to fix its width to the current breakpoint.",
  "reference": "https://tailwindcss.com/docs/container",
  "table": {
    "headers": ["Class", "Breakpoint", "CSS Equivalent"],
    "rows": [
      [".container", "none", "width: 100%"],
      ["sm:", "Small (640px)", "max-width: 640px"],
      ["md:", "Medium (768px)", "max-width: 768px"],
      ["lg:", "Large (1024px)", "max-width: 1024px"],
      ["xl:", "Extra Large (1280px)", "max-width: 1280px"],
      ["2xl:", "2X Large (1536px)", "max-width: 1536px"]
    ]
  }
},
{
    "icon": "🌊",
    "category": "TailwindCSS",
    "title": "Box Decoration Break",
    "description": "Set how an element's fragments should be rendered when broken across multiple lines, columns, or pages.",
    "reference": "https://tailwindcss.com/docs/box-decoration-break",
    "table": {
      "headers": ["Class", "CSS Equivalent"],
      "rows": [
        [".decoration-slice", "box-decoration-break: slice;"],
        [".decoration-clone", "box-decoration-break: clone;"]
      ]
    }
  },
  {
    "icon": "🌊",
    "category": "TailwindCSS",
    "title": "Box Sizing",
    "description": "Define how the width and height of an element are calculated: should they include padding and borders, or not.",
    "reference": "https://tailwindcss.com/docs/box-sizing",
    "table": {
      "headers": ["Class", "CSS Equivalent"],
      "rows": [
        [".box-border", "box-sizing: border-box;"],
        [".box-content", "box-sizing: content-box;"]
      ]
    }
  },
  {
    "icon": "🌊",
    "category": "TailwindCSS",
    "title": "Breakpoints",
    "description": "Use the breakpoints (screen sizes) to set how the utility-classes respond according to the device width.",
    "reference": "https://tailwindcss.com/docs/responsive-design",
    "table": {
      "headers": ["Prefix", "CSS Equivalent"],
      "rows": [
        ["sm:", "@media (min-width: 640px) { ... }"],
        ["md:", "@media (min-width: 768px) { ... }"],
        ["lg:", "@media (min-width: 1024px) { ... }"],
        ["xl:", "@media (min-width: 1280px) { ... }"],
        ["2xl:", "@media (min-width: 1536px) { ... }"]
      ]
    }
  },
    {
    "icon": "🌊",
    "category": "TailwindCSS",
    "title": "Display",
    "description": "Specify the display behavior (the type of rendering box) of an element.",
    "reference": "https://tailwindcss.com/docs/display",
    "table": {
      "headers": ["Class", "CSS Equivalent"],
      "rows": [
        [".hidden", "display: none;"],
        [".contents", "display: contents;"],
        [".list-item", "display: list-item;"],
        [".block", "display: block;"],
        [".inline-block", "display: inline-block;"],
        [".flex", "display: flex;"],
        [".inline-flex", "display: inline-flex;"],
        [".inline", "display: inline;"],
        [".table", "display: table;"],
        [".inline-table", "display: inline-table;"],
        [".table-cell", "display: table-cell;"],
        [".table-caption", "display: table-caption;"],
        [".table-column", "display: table-column;"],
        [".table-column-group", "display: table-column-group;"],
        [".table-footer-group", "display: table-footer-group;"],
        [".table-header-group", "display: table-header-group;"],
        [".table-row-group", "display: table-row-group;"],
        [".table-row", "display: table-row;"],
        [".flow-root", "display: flow-root;"],
        [".grid", "display: grid;"],
        [".inline-grid", "display: inline-grid;"]
      ]
    }
  },
  {
    "icon": "🌊",
    "category": "TailwindCSS",
    "title": "Float",
    "description": "Place an element on the left or right side of its container, allowing text and inline elements to wrap around it.",
    "reference": "https://tailwindcss.com/docs/float",
    "table": {
      "headers": ["Class", "CSS Equivalent"],
      "rows": [
        [".float-right", "float: right;"],
        [".float-left", "float: left;"],
        [".float-none", "float: none;"]
      ]
    }
  },
  {
    "icon": "🌊",
    "category": "TailwindCSS",
    "title": "Clear",
    "description": "Set whether an element must be moved below (cleared) floating elements that precede it.",
    "reference": "https://tailwindcss.com/docs/clear",
    "table": {
      "headers": ["Class", "CSS Equivalent"],
      "rows": [
        [".clear-left", "clear: left;"],
        [".clear-right", "clear: right;"],
        [".clear-both", "clear: both;"],
        [".clear-none", "clear: none;"]
      ]
    }
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Isolation",
    "description": "Determine whether an element must create a new stacking context.",
    "table": [
      { "tag": ".isolate", "description": "isolation: isolate;", "syntax": ".isolate" },
      { "tag": ".isolate-auto", "description": "isolation: auto;", "syntax": ".isolate-auto" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Object Fit",
    "description": "Set how the content of a replaced element should be resized to fit its container.",
    "table": [
      { "tag": ".object-contain", "description": "object-fit: contain;", "syntax": ".object-contain" },
      { "tag": ".object-cover", "description": "object-fit: cover;", "syntax": ".object-cover" },
      { "tag": ".object-fill", "description": "object-fit: fill;", "syntax": ".object-fill" },
      { "tag": ".object-none", "description": "object-fit: none;", "syntax": ".object-none" },
      { "tag": ".object-scale-down", "description": "object-fit: scale-down;", "syntax": ".object-scale-down" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Object Position",
    "description": "Specify the alignment of the replaced element's contents within the box.",
    "table": [
      { "tag": ".object-bottom", "description": "object-position: bottom;", "syntax": ".object-bottom" },
      { "tag": ".object-center", "description": "object-position: center;", "syntax": ".object-center" },
      { "tag": ".object-left", "description": "object-position: left;", "syntax": ".object-left" },
      { "tag": ".object-left-bottom", "description": "object-position: left bottom;", "syntax": ".object-left-bottom" },
      { "tag": ".object-left-top", "description": "object-position: left top;", "syntax": ".object-left-top" },
      { "tag": ".object-right", "description": "object-position: right;", "syntax": ".object-right" },
      { "tag": ".object-right-bottom", "description": "object-position: right bottom;", "syntax": ".object-right-bottom" },
      { "tag": ".object-right-top", "description": "object-position: right top;", "syntax": ".object-right-top" },
      { "tag": ".object-top", "description": "object-position: top;", "syntax": ".object-top" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Overflow",
    "description": "Set how an element's content behaves when it overflows its container.",
    "table": [
      { "tag": ".overflow-auto", "description": "overflow: auto;", "syntax": ".overflow-auto" },
      { "tag": ".overflow-x-auto", "description": "overflow-x: auto;", "syntax": ".overflow-x-auto" },
      { "tag": ".overflow-y-auto", "description": "overflow-y: auto;", "syntax": ".overflow-y-auto" },
      { "tag": ".overflow-hidden", "description": "overflow: hidden;", "syntax": ".overflow-hidden" },
      { "tag": ".overflow-x-hidden", "description": "overflow-x: hidden;", "syntax": ".overflow-x-hidden" },
      { "tag": ".overflow-y-hidden", "description": "overflow-y: hidden;", "syntax": ".overflow-y-hidden" },
      { "tag": ".overflow-visible", "description": "overflow: visible;", "syntax": ".overflow-visible" },
      { "tag": ".overflow-x-visible", "description": "overflow-x: visible;", "syntax": ".overflow-x-visible" },
      { "tag": ".overflow-y-visible", "description": "overflow-y: visible;", "syntax": ".overflow-y-visible" },
      { "tag": ".overflow-scroll", "description": "overflow: scroll;", "syntax": ".overflow-scroll" },
      { "tag": ".overflow-x-scroll", "description": "overflow-x: scroll;", "syntax": ".overflow-x-scroll" },
      { "tag": ".overflow-y-scroll", "description": "overflow-y: scroll;", "syntax": ".overflow-y-scroll" },
      { "tag": ".scrolling-touch", "description": "-webkit-overflow-scrolling: touch;", "syntax": ".scrolling-touch" },
      { "tag": ".scrolling-auto", "description": "-webkit-overflow-scrolling: auto;", "syntax": ".scrolling-auto" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Overscroll Behavior",
    "description": "Control behavior when the boundary of a scrolling area is reached.",
    "table": [
      { "tag": ".overscroll-auto", "description": "overscroll-behavior: auto;", "syntax": ".overscroll-auto" },
      { "tag": ".overscroll-y-auto", "description": "overscroll-behavior-y: auto;", "syntax": ".overscroll-y-auto" },
      { "tag": ".overscroll-x-auto", "description": "overscroll-behavior-x: auto;", "syntax": ".overscroll-x-auto" },
      { "tag": ".overscroll-contain", "description": "overscroll-behavior: contain;", "syntax": ".overscroll-contain" },
      { "tag": ".overscroll-y-contain", "description": "overscroll-behavior-y: contain;", "syntax": ".overscroll-y-contain" },
      { "tag": ".overscroll-x-contain", "description": "overscroll-behavior-x: contain;", "syntax": ".overscroll-x-contain" },
      { "tag": ".overscroll-none", "description": "overscroll-behavior: none;", "syntax": ".overscroll-none" },
      { "tag": ".overscroll-y-none", "description": "overscroll-behavior-y: none;", "syntax": ".overscroll-y-none" },
      { "tag": ".overscroll-x-none", "description": "overscroll-behavior-x: none;", "syntax": ".overscroll-x-none" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Position",
    "description": "Set how an element is positioned in a document.",
    "table": [
      { "tag": ".static", "description": "position: static;", "syntax": ".static" },
      { "tag": ".fixed", "description": "position: fixed;", "syntax": ".fixed" },
      { "tag": ".absolute", "description": "position: absolute;", "syntax": ".absolute" },
      { "tag": ".relative", "description": "position: relative;", "syntax": ".relative" },
      { "tag": ".sticky", "description": "position: sticky;", "syntax": ".sticky" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Visibility",
    "description": "Show or hide an element without changing the layout of a document.",
    "table": [
      { "tag": ".visible", "description": "visibility: visible;", "syntax": ".visible" },
      { "tag": ".invisible", "description": "visibility: hidden;", "syntax": ".invisible" }
    ]
  },
  {
    "category": "TailwindCSS",
    "icon": "🌊",
    "title": "Z-index",
    "description": "Set the z-order of a positioned element and its descendants or flex items.",
    "table": [
      { "tag": ".z-0", "description": "z-index: 0;", "syntax": ".z-0" },
      { "tag": ".z-10", "description": "z-index: 10;", "syntax": ".z-10" },
      { "tag": ".z-20", "description": "z-index: 20;", "syntax": ".z-20" },
      { "tag": ".z-30", "description": "z-index: 30;", "syntax": ".z-30" },
      { "tag": ".z-40", "description": "z-index: 40;", "syntax": ".z-40" },
      { "tag": ".z-50", "description": "z-index: 50;", "syntax": ".z-50" },
      { "tag": ".z-auto", "description": "z-index: auto;", "syntax": ".z-auto" }
    ]
  }








      ];
      

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

      const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
          case 'Beginner': return 'text-green-400 bg-green-500/10';
          case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10';
          case 'Advanced': return 'text-red-400 bg-red-500/10';
          default: return 'text-gray-400 bg-gray-500/10';
        }
      };

      const categories = ['All', ...new Set(notes.map(note => note.category))];

    
      return (
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="text-6xl">📄</div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
               CheatSheet
              </h1>
            </div>
            <p className=" text-2xl lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Your Quick Reference Guide from Basics to Advanced.
            </p>

          </div>
    
          {/* Search and Filter Section */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full max-w-md self-center">
          <input
            type="text"
            placeholder="Search CSS concepts..."
            className="w-full px-4 py-3 pl-12 bg-[#2a1640] border border-purple-800/30 rounded-xl text-white placeholder-gray-400 font-sans focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent text-[14px] font-semibold"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            <span>{filteredNotes.length} concept{filteredNotes.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
    
          {/* Notes Grid */}
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {filteredNotes.map((note, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br from-[#2a1640] to-[#1a0f2e] border border-purple-800/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                  animateCards ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-purple-800/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl lg:text-3xl">{note.icon}</div>
                      <div>
                        <h2 className="text-4xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {note.title}
                        </h2>
                        
                        <div className="flex items-center gap-2 mt-1">
                   
                       <span className="text-2xl lg:text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
                            {note.category} 
                          </span> 
                          {note.difficulty && (
                            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(note.difficulty)}`}>
                              {note.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {(note.code || note.examples) && (
                      <button
                        onClick={() => toggleCard(index)}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg 
                          className={`w-5 h-5 transform transition-transform duration-200 ${
                            expandedCards.has(index) ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
    
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-300 leading-relaxed text-3xl lg:text-xl">{note.description}</p>
      
          {/* Table (if exists) */}
          {note.table && (
            <div className="overflow-x-auto mt-4">
              {Array.isArray(note.table) && note.table.length > 0 && note.table[0].tag ? (
                <table className="min-w-full table-auto border-collapse border border-gray-700 text-sm text-left text-gray-300">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2">Tag</th>
                      <th className="border border-gray-700 px-4 py-2">Description</th>
                      <th className="border border-gray-700 px-4 py-2">Syntax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {note.table.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50">
                        <td className="border border-gray-700 px-4 py-2">{row.tag}</td>
                        <td className="border border-gray-700 px-4 py-2">{row.description}</td>
                        <td className="border border-gray-700 px-4 py-2">
                          <code className="text-green-300">{row.syntax}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : Array.isArray(note.table) && note.table.length > 0 && note.table[0].symbol ? (
                <table className="min-w-full table-auto border-collapse border border-gray-700 text-sm text-left text-gray-300">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2">Symbol</th>
                      <th className="border border-gray-700 px-4 py-2">Description</th>
                      <th className="border border-gray-700 px-4 py-2">Entity Name</th>
                      <th className="border border-gray-700 px-4 py-2">Number Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {note.table.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50">
                        <td className="border border-gray-700 px-4 py-2">
                          <span dangerouslySetInnerHTML={{ __html: row.symbol }} />
                        </td>
                        <td className="border border-gray-700 px-4 py-2">{row.description}</td>
                        <td className="border border-gray-700 px-4 py-2">
                          <code className="text-yellow-300" dangerouslySetInnerHTML={{ __html: row.entity_name }} />
                        </td>
                        <td className="border border-gray-700 px-4 py-2">
                          <code className="text-yellow-300" dangerouslySetInnerHTML={{ __html: row.number_code }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : Array.isArray(note.table) && note.table.length > 0 && note.table[0].mediaType ? (
                <table className="min-w-full table-auto border-collapse border border-gray-700 text-sm text-left text-gray-300">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2">Media Type</th>
                      <th className="border border-gray-700 px-4 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {note.table.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50">
                        <td className="border border-gray-700 px-4 py-2">{row.mediaType}</td>
                        <td className="border border-gray-700 px-4 py-2">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : note.table.headers && note.table.rows ? (
                <table className="min-w-full table-auto border-collapse border border-gray-700 text-sm text-left text-gray-300">
                  <thead className="bg-gray-800">
                    <tr>
                      {note.table.headers.map((header, idx) => (
                        <th key={idx} className="border border-gray-700 px-4 py-2">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {note.table.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50">
                        {row.map((cell, i) => (
                          <td key={i} className="border border-gray-700 px-4 py-2">
                            <code className="text-green-300">{cell}</code>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>
          )}
                  {/* Code Block */}
                  {note.code && (
                    <div className={`transition-all duration-300 ${
                      expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <div className="relative">
                        <pre className="bg-black/40 border border-gray-700 rounded-lg p-4 text-sm overflow-x-auto">
                          <code className="text-green-300">{note.code}</code>
                        </pre>
                        <button
                          onClick={() => copyToClipboard(note.code)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                          title="Copy code"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
    
                  {/* Examples */}
                  {note.examples && (
                    <div className={`transition-all duration-300 ${
                      expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <div className="space-y-3">
                        {note.examples.map((example, i) => (
                          <div key={i} className="bg-black/20 border border-gray-700 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <code className="text-orange-300 font-mono text-sm">{example.tag || example.attr}</code>
                              <span className="text-gray-400 text-sm">-</span>
                              <span className="text-gray-300 text-sm">{example.description}</span>
                            </div>
                            {example.example && (
                              <code className="text-green-300 text-xs block mt-1">{example.example}</code>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
    
                  {/* Tips */}
                  {note.tips && (
                    <div className="mt-4">
                      <h3 className=" text-3xl  lg:text-sm font-semibold text-purple-400 mb-2">💡 Pro Tips:</h3>
                      <ul className="space-y-1">
                        {note.tips.map((tip, i) => (
                          <li key={i} className="text-2xl  lg:text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
    
          {/* No Results */}
          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl text-gray-400 mb-2">No concepts found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
    
          {/* CSS Animations */}
          <style jsx>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out;
            }
          `}</style>
        </div>
      );
    };
    

export default CheatSheet;