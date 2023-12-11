import '../styles/Ratings.css';
import star_p from '../assets/star_p.png';
import star_v from '../assets/star_v.png';

function Rating({_note}) {
    const range = [1, 2, 3, 4, 5];

	return (
		<div className='star'>
			{range.map((n) =>
				_note >= n ? (
					<img src={star_p} key={n.toString()} alt='star' />
				) : <img src={star_v} key={n.toString()} alt='star vide' />
			)}
		</div>
	)
}
 
export default Rating