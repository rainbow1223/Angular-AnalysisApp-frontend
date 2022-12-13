export class Config {
    static BASE_URL: string = 'http://localhost:46280/api/'; 
    static BASE_URL2: string = 'http://localhost:46280/';   
    static tooltip: any = {
        fromPersonHint: `An analysis is performed on an entity by a person. The person who performs that analysis must have a name. Here all that I need to do is to select the name of the person who perform the analysis.`,
        analysisSubjectHint: `The subject of an analysis is what that analysis is about. For instance if we analyze Entity One, then the subject of our analysis about Entity One reflects what our analysis is about. Here I enter a subject of my analysis to show what it is about.`,
        actualAnalysisHint: ` The analysis about an entity must include the analysis itself. For instance, if we analyze Entity One, then that analysis must exist. Here I enter the analysis of the entity that is currently under analysis. Since in order for that entity to be analyzed, the actual analysis must exist, the analysis itself is needed to enable the correction of the error.`,
        actualErrorMessage: `If we identify an error, that error must be an actual error.  If an  error exists, it must be real.  Let's assume that in a sentence we  identify a bad word and that word is Word One in that sentence.  In  this case, Word One is considered to be the actual error.  We can name  the actual error Word One or simply Word One identified in the identified  sentence.  Here I must enter the actual error or I must identify it.`,
        fromActualApplication: `If we identify an actual error, then that error must be identified  either in an application or in a communication.  If we identify an  error, then that error must be in our communication or in what we do.  Here we need to identify or say in what communication or the application  the error is coming from.  For instance, while I am communicating with  my friend, I repeat a sentence that contains a bad word.  Here the actual  error is coming from my communication or my communication with my friend. Here I need to specify where the error is coming from.`,
        entityErrorPointToMessage: `For instance, in oral and written communications, we identify entities  by words that we use.  Usually we commit an error if we don't think  accordingly about an entity.  In this case for instance, we can simply  disregard the actual information about an entity and think about that  entity differently than what it is.  By thinking differently about an  entity, then what we think about that entity does not match that entity  or match the information about that entity.  In this case, we simply think  about another entity, whether it exists or not, but does not match the entity we should think about.  By understanding that, we can see that  this is simply an error that point to an incorrect entity or an entity that does not exists.  Here we use the term incorrect entity to refer to another entity, which is not the actual entity we should think about.  By understanding that, here all that I need to do, identify the entity the  entity the error points to.`,
        errorDescriptionMessage: `If an error exists, it must have a description.  If we identify an error  in our application, then we must be able to describe that error.  If we  identify an error in our communication, then we must be able to describe  that error.  By being able to describe an error, then that provides us  with the possibility of correcting it.  Here I will need to provide  a description for the error that I have identified.`,
        actualCompensatorMessage: `The actual compensator is the entity that needs to replace the  error.  Here I need to enter the actual compensator to enable  the correction of the identified error.`,
        errorToReplaceMessage: `A compensator exists solely to enable the correction of an error.  In order for the compensator to replace that error, that error  itself must be identified.  Here I identify the error that the  compensator will replace.`,
        inActualApplication: `The actual application or communization where the compensator  is going to be used or corrected.  For instance if there is  an error in a sentence, that sentence is being viewed as the  actual communication or the actual sentence.  As well as, if  within the production of an entity there is an error, if the  compensator is going to be used to correct that error, then  the actual production is being viewed as the actual application.`,
        compensatorDescription: `If the compensator exists to enable the correction of an  error, that compensator itself must have a description.  Here I provide a description of the actual compensator. `,
        informationAnswerPoint: `If an entity exists, then information about that entity  must exist.  The information about an entity enables  enables a question about that entity to be answered.  For instance, if Entity One exists, then information  about Entity One Exists.  Now any question about entity  one is answered from that information. Here I must enter  The information my answer points to.`,
        actualAnswerMessage: `The existence of an entity enables the existence of information  about that entity.  The existence of an entity enables the existence  of questions about that entity.  If the actual information about  an entity is known, then it can be used to answer questions about  that entity.  Here I enter the actual answer which is related to the  actual information of the entity`,
        actualProblemMessage: `If we identify an entity, that entity must be actual.If we identify a problem in our project, then that problem must be actual. Here I need to enter or state the actual problem`,
        problemNameMessage: `If we identify a problem, then that problem must have a name. If we identify a problem in our project, then that problem must have a name.  Here I need to enter the name of the problem that I have identified.`,
        fromActulErrorMessage: `Error gives rise to problem, a problem that we identify comes from an error that we committed. Problems that we identify in our project are from errors that we are committed Here I need to select the error that gives rise to the problem that I identify or need to identify.`,
        problemDescriptionMessage: `We identify an entity, that entity has a description, and then we can describe that entity. We identify a problem, that problem has a description and we can state that description. Here I need to provide a description for the problem that I have identified.`,
        actualQuestionMessage: `If an entity exits, then questions about that entity exits. If I identify an entity, then I can have a question about that entity. Here I enter my question about the entity my question points to.`,
        questionPointToMessage: `A question about an entity must point to that entity. If that entity does not exist, then that question does not exist. For instance, a question about a dog, points to that dog; a question about a cat points to that cat. Here I must identify the entity my question points to.`,
        
    }

    static userInfo = {
        id: 0,
        jwtToken: '',
        email: '',
        firstName: '',
        lastName: '',
        isVerified: false,
        password: '',
        role: '',
        title: '',
        updated:'',
        created:''
      };

   // set user information
  static setUserInfo(user) {
    this.userInfo.id = user.id;
    this.userInfo.jwtToken = user.jwtToken;
    this.userInfo.email = user.email;
    this.userInfo.firstName = user.firstName;
    this.userInfo.lastName = user.lastName;
    this.userInfo.isVerified = user.isVerified;
    this.userInfo.password = user.password;
    this.userInfo.role = user.role;
    this.userInfo.title = user.title;
    this.userInfo.updated = user.updated;
    this.userInfo.created = user.created;
  }

  // clear User Information
  static clearUserInformation() {
    this.userInfo.id = null;
    this.userInfo.jwtToken = null;
    this.userInfo.email = null;
    this.userInfo.firstName = null;
    this.userInfo.lastName = null;
    this.userInfo.isVerified = null;
    this.userInfo.password = null;
    this.userInfo.role = null;
    this.userInfo.title = null;
    this.userInfo.updated = null;
    this.userInfo.created = null;
  }
}