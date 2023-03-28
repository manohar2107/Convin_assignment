import React, { useState } from 'react';
import Card from './Card';

function Bucket({ id, name, cards, onAddCard, onDeleteCard, onMoveCard }) {
  const [bucketName, setBucketName] = useState(name);
  const [cardName, setCardName] = useState('');
  const [cardUrl, setCardUrl] = useState('');
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  const handleAddCard = () => {
    onAddCard(id, cardName, cardUrl);
    setCardName('');
    setCardUrl('');
  };

  const handleDeleteCard = (cardId) => {
    onDeleteCard(id, cardId);
  };

  const handleMoveCard = (cardId, targetBucketId) => {
    onMoveCard(id, cardId, targetBucketId);
    setSelectedCardIds([]);
  };

  const handleSelectAllCards = () => {
    setSelectedCardIds(cards.map((card) => card.id));
  };

  const handleDeleteSelectedCards = () => {
    selectedCardIds.forEach((cardId) => {
      onDeleteCard(id, cardId);
    });
    setSelectedCardIds([]);
  };

  const toggleCardSelection = (cardId) => {
    if (selectedCardIds.includes(cardId)) {
      setSelectedCardIds(selectedCardIds.filter((id) => id !== cardId));
    } else {
      setSelectedCardIds([...selectedCardIds, cardId]);
    }
  };

  return (
    <div className="bucket">
      <div className="bucket-header">
        <h2>{bucketName}</h2>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            url={card.url}
            isSelected={selectedCardIds.includes(card.id)}
            onSelect={() => toggleCardSelection(card.id)}
            onDeleteCard={() => handleDeleteCard(card.id)}
          />
        ))}
        <div className="add-card">
          <input
            type="text"
            placeholder="Enter card name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter video/mp3 URL"
            value={cardUrl}
            onChange={(e) => setCardUrl(e.target.value)}
          />
          <button onClick={handleAddCard}>Add Card</button>
        </div>
        <div className="card-actions">
        <button onClick={handleDeleteSelectedCards}>Delete Selected Cards</button>
        <button onClick={handleSelectAllCards}>Select All Cards</button>
      </div>
    </div>
  </div>
);
}

export default Bucket;
