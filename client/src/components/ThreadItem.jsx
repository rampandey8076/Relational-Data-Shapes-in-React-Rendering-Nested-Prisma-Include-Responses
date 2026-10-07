import PropTypes from "prop-types";

function ThreadItem({ thread }) {
  const authorName = thread.author?.name ?? "Unknown";
  const avatarUrl =
    thread.author?.avatarUrl ?? "/placeholder-avatar.png";
  const replyCount = thread._count?.comments ?? 0;
  const replyLabel = replyCount === 1 ? "reply" : "replies";

  return (
    <article className="thread-card">
      <div className="thread-header">
        <img
          src={avatarUrl}
          alt={authorName}
          className="avatar"
        />

        <div>
          <h3>{thread.title}</h3>
          <p className="meta">by {authorName}</p>
        </div>
      </div>

      <p>{thread.body}</p>

      <span className="reply-badge">
        {replyCount} {replyLabel}
      </span>
    </article>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    authorId: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
    _count: PropTypes.shape({
      comments: PropTypes.number,
    }),
  }).isRequired,
};

export default ThreadItem;