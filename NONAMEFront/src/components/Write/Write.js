import React, { useState, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';

// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const Write = () => {
  const mdEditor = useRef(null);
  const [value, setValue] = useState();

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, '');
    console.log(newValue);
    setValue(newValue);
    //
    //
  };
  return (
    <>
      <div>글쓰기</div>
      {/* <MdEditor
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
      /> */}
      <MdEditor
        ref={mdEditor}
        value={value}
        style={{
          width: '640px',
          height: '500px',
          margin: 'auto',
        }}
        onChange={handleEditorChange}
        renderHTML={(text) => <ReactMarkdown source={text} />}
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
