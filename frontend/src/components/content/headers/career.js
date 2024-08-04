import verseImg from '../../../assets/svg/career-verse.svg';

export const HEADER_GC = ({...props}) => {
    return {
        verse: 
            <img src={verseImg} style={{width: "min(75%, 640px)"}}/>,

        buttons: <></>,

        translation: 
            <h3 style={{color: "#66615B", marginTop: "10px"}} className="text-center">And He is the One Who enriches and impoverishes.</h3>,
        
    }
}