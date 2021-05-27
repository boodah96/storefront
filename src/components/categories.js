
import { connect } from 'react-redux';
import { getCategory } from './../store/categories';
import{Button} from '@material-ui/core';

const Categories = ({ categories, getCategory }) => {
	return (
		<>
			<ul
				style={{
					marginTop: '5rem',
					listStyle: 'none',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			>
				{categories.map((category, i) => (
					<li
						key={i}
						

 
						onClick={() => getCategory(category.name)}
						style={{
							cursor: 'pointer',
						}}
					>
						<Button variant="contained" color="primary">{category.displayName}</Button>
						
						
					</li>
				))}
			</ul>
		</>
	);
};

const mapStateToProps = (state) => {
	return { categories: state.categories.categories };
};

const mapDispatchToProps = { getCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);