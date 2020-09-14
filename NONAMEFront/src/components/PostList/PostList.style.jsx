import styled from 'styled-components';

export const PostListStyles = styled.div`
  width: 300px;
  height: 240px;
`;

export const PostItem = styled(PostListStyles)`
  display: flex;
  flex-direction: column;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px 0px 15px 0px;
`;

export const PostWrapTitle = styled(PostWrap)`
  width: 190px;
  height: 58px;
  padding: 2px 4.2px 2px 4.2px;
  font-size: 18px;
  font-weight: 600;
`;

export const PostWriterWrap = styled.div`
  width: 120px;
  padding: 2px 4.2px 2px 4.2px;
  font-size: 14px;
  height: 58px;
  display: flex;
  font-weight: 500;
  align-items: flex-end;
  color: #b3aeae;
`;

export const PostWriterName = styled.div`
  position: relative;
`;
