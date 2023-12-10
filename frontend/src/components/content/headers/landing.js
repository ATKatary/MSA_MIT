import bismAllah from '../../../assets/svg/bismAllah.svg';

export const HEADER_GC = ({...props}) => {
    return {
        verse: 
            <img src={bismAllah} style={{width: "min(75%, 640px)"}}/>,

        buttons: <></>,

        translation: 
            <h3 style={{color: "#66615B", marginTop: "10px"}} className="text-center">In the name of Allah, the most Merciful.</h3>,
        
    }
}