import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const Write = () => {
  //   let mdEditor = null;
  //   mdParser = null;
  const handleEditorChange = ({ html, text }) => {
    console.log('handleEditorChange', html, text);
  };
  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
      return ''; // use external default escaping
    },
  });
  return (
    <>
      <div>글쓰기</div>
      <MdEditor
        // ref={(node) => (mdEditor = node)}
        value=""
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        // renderHTML={this.renderHTML}
        onChange={handleEditorChange}
        config={{
          view: {
            menu: true,
            md: true,
            html: true,
          },
        }}
      />
    </>
  );
};

export default Write;
