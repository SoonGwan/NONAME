import React, { useState, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import './Write.scss';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import ImageUploader from 'react-images-upload';

const Write = ({
  value,
  setValue,
  mdEditor,
  handleEditorChange,
  requestHandleTeamMake,
  teamName,
  setTeamName,
  mainImage,
  setMainImage,
  whoMade,
  setWhoMade,
  onDrop,
  pictures,
  setPictures,
  requestHandleUpLoad,
  image,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="팀 이름"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <input type="file" onChange={onDrop} />

      <button onClick={() => requestHandleUpLoad()}>사진 업로드</button>
      <input
        type="text"
        placeholder="작성자"
        value={whoMade}
        onChange={(e) => setWhoMade(e.target.value)}
      />
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
      <button onClick={() => requestHandleTeamMake()}>글쓰기</button>
    </>
  );
};

export default Write;
