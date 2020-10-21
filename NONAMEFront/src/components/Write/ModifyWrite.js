import React, { useState, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import './Write.scss';
// import style manually
import {
  WriteStyles,
  TeamName,
  FileLabel,
  MakeTeamButton,
} from './Write.style';
import 'react-markdown-editor-lite/lib/index.css';
import ImageUploader from 'react-images-upload';

const ModiftyWrite = ({
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
  requestHandleModifyMyTeam,
  idxs,
}) => {
  return (
    <>
      <WriteStyles>
        {/* <input type="file" onChange={onDrop} /> */}

        <div class="filebox">
          <TeamName
            type="text"
            placeholder="팀 이름"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>

        {/* <input
          type="text"
          placeholder="작성자"
          value={whoMade}
          onChange={(e) => setWhoMade(e.target.value)}
        /> */}
        <MdEditor
          ref={mdEditor}
          value={value}
          style={{
            width: '640px',
            height: '500px',
            margin: 'auto',
          }}
          canView={{
            menu: true,
            md: true,
            html: true,
            fullScreen: false,
            hideMenu: true,
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

        <MakeTeamButton onClick={() => requestHandleModifyMyTeam(idxs)}>
          팀 수정하기
        </MakeTeamButton>
      </WriteStyles>
    </>
  );
};

export default ModiftyWrite;
