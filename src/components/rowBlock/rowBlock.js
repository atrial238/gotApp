import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
	return (
		// <Row>
		// 	<Col md='6'>
		// 		{left}
		// 	</Col>
		// 	<Col md='6'>
		// 		{right}
		// 	</Col>
		// </Row>
		<Row>
			<Col md='6'>
				{left}
			</Col>
		</Row>
	)
}
export default RowBlock;