import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({
  post: { id, userId, title, body },
  comments,
  users,
}) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={users.find(user => user.id === userId)} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <CommentList
        comments={comments.filter(comment => comment.postId === id)}
      />
    </div>
  );
};
