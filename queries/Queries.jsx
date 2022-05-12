import { gql } from "@apollo/client";
export const BUTTON_ACTION = gql`
	query Character($parameter: ID!){
		character (id: $parameter) {
				id
				name
				status
				species
				type
				gender
				origin{name}
				location{name}
				created
				image
			}
	}
	`;