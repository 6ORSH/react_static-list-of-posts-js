import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return null;
  }

  return (
    <div className="CommentList">
      {comments.map(commentInfo => (
        <CommentInfo commentInfo={commentInfo} key={commentInfo.id} />
      ))}
    </div>
  );
};
