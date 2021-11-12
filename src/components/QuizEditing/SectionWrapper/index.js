import QuizSection from "../QuizSection";

const SectionWrapper = ({tag, quiz})=>{

    if(tag===0){
        return <QuizSection
                quiz={quiz}/>
    }

    if(tag===1){
        return <div>Question List</div>
    }
}

export default SectionWrapper