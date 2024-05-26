import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from "../footer.jsx";
const style = {
    marginBottom: "20px",
    backgroundColor: 'rgba(229,228,222,0.96)',
    padding: "5px 30px"
}


const Faq = () => {
    return (
        <>
            <div style={{width: "80%", margin: "auto", padding: "45px"}}>
                <Accordion style={style} defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={style}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Accordion 2
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={style}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Limit Start Nima ?
                    </AccordionSummary>
                    <AccordionDetails>
                        Limit Start - bu 3 oyga ustamasiz va boshlang'ich to'lovsiz muddatli to'lovga xarid qilish
                        imkoniyatini beruvchi tarif. Agar siz mobil ilovamizda kartangizni qo'shmasdan faqat tezkor
                        ro'yxatdan o'tgan bo'lsangiz, limit 500 000 so'mni tashkil qiladi.Agar siz karta va ishonchli
                        shaxslarni qo'shish orqali skoringdan o'tgan bo'lsangiz, ushbu limitni oshirishingiz mumkin.
                        Bunday holda siz asosiy limitning (Limit Max) 25 foiziga, ya'ni 5 000 000 so'mgacha ega
                        bo'lasiz.
                    </AccordionDetails>
                </Accordion>
            </div>
            <Footer/>
        </>

    )
}


export default Faq;