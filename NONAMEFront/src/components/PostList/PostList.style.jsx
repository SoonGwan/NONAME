import styled from 'styled-components';

// export const PostListStyles = styled.div`
//   width: 300px;
//   height: 240px;
//   cursor: pointer;
// `;

// export const PostItem = styled(PostListStyles)`
//   display: flex;
//   flex-direction: column;
// `;

// export const PostImg = styled.img`
//   width: 100%;
//   height: 150px;
//   min-height: 150px;
//   object-fit: contain;
// `;

// export const PostWrap = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   padding: 15px 0px 15px 0px;
// `;

// export const PostWrapTitle = styled(PostWrap)`
//   width: 190px;
//   height: 58px;
//   padding: 2px 4.2px 2px 4.2px;
//   font-size: 18px;
//   font-weight: 600;
// `;

// export const PostWriterWrap = styled.div`
//   width: 120px;
//   padding: 2px 4.2px 2px 4.2px;
//   font-size: 14px;
//   height: 58px;
//   display: flex;
//   font-weight: 500;
//   align-items: flex-end;
//   color: #b3aeae;
// `;

// export const PostWriterName = styled.div`
//   position: relative;
// `;

export const PostListStyles = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 hsla(0, 0%, 60.4%, 0.2);
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

export const PostImg = styled.img`
  width: 300px;
  height: 140px;
  min-height: 140px;
  object-fit: contain;
  position: absolute;
  border-radius: 5px 5px 0px 0px;
  z-index: 1;
`;

export const ImgLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.46);
  width: 300px;
  height: 140px;
  /* position: absolute; */
  border-radius: 5px 5px 0px 0px;
  z-index: 2;
`;

export const ImgTitle = styled.div`
  /* position: absolute;
  color: white;
  font-weight: bold;
  font-size: 23px;
  z-index: 10;
  display: flex;
  margin: 0 auto;
  & > div {
    width: 100%;
    height: 40px;
  } */
  position: absolute;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  z-index: 3;
  width: 300px;
  height: 140px;
  display: flex;
  align-items: center;
  & > div {
    white-space: nowrap;
    text-overflow: ellipsis;
    z-index: 3;
    width: 300px;
    box-sizing: border-box;
    vertical-align: middle;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.3;
    color: rgb(255, 255, 255);
    overflow: hidden;
    padding: 0px 20px;
    align-items: center;
  }
`;

export const TitleDoing = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 10;
  width: 300px;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 10px 0px 0px;
`;

export const TitleDoingText = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 75px;
  font-size: 13px;
  font-weight: 400;
  color: rgb(255, 97, 120);
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 97, 120);
  border-image: initial;
  border-radius: 20px;
  padding: 2px 4px 3px;
`;

export const UnderCardWrap = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
`;

export const RightWrap = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8c8cbe;
  font-size: 12px;
`;

export const LeftWrap = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
`;

export const WrapUser = styled.div`
  display: flex;
  margin: auto;
`;

export const TeamMaster = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 40px;
  font-size: 13px;
  font-weight: 400;
  color: rgb(255, 97, 120);
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(255, 97, 120);
  border-image: initial;
  border-radius: 20px;
  padding: 2px 4px 3px;
  font-size: 10px;
`;

export const TitleDoingTextSmall = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 40px;
  font-size: 13px;
  font-weight: 400;
  color: rgb(255, 97, 120);
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(255, 97, 120);
  border-image: initial;
  border-radius: 20px;
  padding: 3px 4px 2px;
  font-size: 10px;
  margin-right: 4px;
`;
