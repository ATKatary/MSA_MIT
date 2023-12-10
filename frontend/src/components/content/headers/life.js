import bismAllah from '../../../assets/svg/holdToAllah.svg';

export const HEADER_GC = ({...props}) => {
    return {
        verse: 
            <img src={bismAllah} style={{width: "min(65%, 500px)"}}/>,

        buttons: <></>,

        translation: 
            <h3 style={{color: "#66615B", marginTop: "10px"}} className="text-center">And hold steadfast onto the rope of Allah and do not seperate.</h3>,
        
    }
}