/** @format */

import RefereeListPublicSB from "./RefereeListPublicSB";
import { Container } from "@mui/material";

export default function SearchReferee() {
    // console.log(user);
 
    
   
    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "20px", paddingTop: "10px" }}>
            <RefereeListPublicSB />
        </Container>
    );
}
