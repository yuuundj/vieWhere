import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './SectorViewPanel.module.css';

interface RegionData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  color: string;
}

interface SectorViewPanelProps {
  sector: RegionData | null;
}

interface Review {
  id: string;
  author: string;
  content: string;
  date: string;
}

export default function SectorViewPanel({ sector }: SectorViewPanelProps) {
  const { stadiumId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState('');
  const [authorName, setAuthorName] = useState('');

  // Load reviews from localStorage whenever sector changes
  useEffect(() => {
    if (sector && stadiumId) {
      const stored = localStorage.getItem(`viewhere_reviews_${stadiumId}_${sector.id}`);
      if (stored) {
        setReviews(JSON.parse(stored));
      } else {
        setReviews([]);
      }
    }
  }, [sector, stadiumId]);

  if (!sector) {
    return (
      <div className={`${classes.panel} ${classes.empty}`}>
        <h3>구역을 선택해주세요</h3>
        <p>지도에서 색칠된 구역을 누르면 상세 뷰와 사용자들의 생생한 리뷰를 볼 수 있습니다.</p>
      </div>
    );
  }

  const handleAddReview = () => {
    if (!newReview.trim() || !authorName.trim()) return;

    const review: Review = {
      id: Date.now().toString(),
      author: authorName.trim(),
      content: newReview.trim(),
      date: new Date().toLocaleDateString('ko-KR')
    };

    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    
    // Save to localStorage
    if (stadiumId) {
      localStorage.setItem(`viewhere_reviews_${stadiumId}_${sector.id}`, JSON.stringify(updatedReviews));
    }
    
    setNewReview('');
  };

  return (
    <div className={classes.panel} style={{ '--sector-color': sector.color } as React.CSSProperties}>
      
      {/* 1. Header & Image */}
      <div className={classes.header}>
        <div className={classes.colorBadge} />
        <h2>{sector.name}</h2>
      </div>
      <div className={classes.imageContainer}>
        <img src={sector.imageUrl} alt={`${sector.name} 뷰`} className={classes.image} />
        <div className={classes.overlayTip}>실제 관람객 시야</div>
      </div>

      {/* 2. Review List */}
      <div className={classes.reviewSection}>
        <h3 className={classes.sectionTitle}>
          <span className={classes.icon}>💬</span> 
          구역 리뷰 
          <span className={classes.countBadge}>{reviews.length}</span>
        </h3>
        
        <div className={classes.reviewList}>
          {reviews.length === 0 ? (
            <div className={classes.emptyReview}>
              아직 첫 번째 후기가 없습니다.<br/>이 구역에 방문해 보셨다면 리뷰를 남겨주세요!
            </div>
          ) : (
            reviews.map(r => (
              <div key={r.id} className={classes.reviewItem}>
                <div className={classes.reviewMeta}>
                  <span className={classes.reviewAuthor}>{r.author}</span>
                  <span className={classes.reviewDate}>{r.date}</span>
                </div>
                <p className={classes.reviewContent}>{r.content}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 3. Review Input Form (Fixed at bottom logic can be handled via CSS flex-grow) */}
      <div className={classes.reviewForm}>
        <input 
          type="text" 
          placeholder="닉네임" 
          value={authorName} 
          onChange={(e) => setAuthorName(e.target.value)}
          className={classes.inputName}
          maxLength={10}
        />
        <div style={{display: 'flex', gap: '8px', marginTop: '8px'}}>
          <input 
            type="text" 
            placeholder="이 좌석 어땠나요? 리뷰를 남겨보세요." 
            value={newReview} 
            onChange={(e) => setNewReview(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddReview()}
            className={classes.inputContent}
          />
          <button onClick={handleAddReview} className={classes.submitBtn} disabled={!newReview.trim() || !authorName.trim()}>
            등록
          </button>
        </div>
      </div>

    </div>
  );
}
