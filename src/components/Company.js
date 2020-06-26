import React from 'react';
import '../style.css';

const Company = (props) => {
	return (
		<div>
			<a href={props.src} target="_blank">
				<img
					className="partner-img"
					src={props.img}
					style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '30px' }}
				/>
			</a>
		</div>
	);
};
export default Company;
