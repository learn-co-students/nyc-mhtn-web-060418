import React from 'react';

const possibleReactions = ["😂", "😨", "💩", "🐐", "🤪", "😭"]

class ReactionButtons extends React.Component {
  render() {
    const possibleReactionLis = possibleReactions.map((moje) => {
      return <li key={ moje }><button className="moje-button">{ moje }</button></li>;
    });

    return (
      <ul className="reaction-buttons">
        { possibleReactionLis }
      </ul>
    );
  }
}

export default ReactionButtons;
