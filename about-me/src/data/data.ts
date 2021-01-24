export type homeData = {
    firstName: string,
    surName: string,
    mainDesignation: string,
    currentPosition: string,
    location: string,
    description: string,
    skills: skillType[],
    languages: langType[]

}

export type skillType = {
    name: string,
    percent: string
}

export type langType = {
    name: string,
    read: boolean,
    write: boolean,
    speak: boolean
}

export type empType = {
    designation: string,
    organisation: string,
    yearRange: string,
    empType: string,
    location: string,
    technologies?: string[],
    descriptions?: string[]

}

export type educationType = {
    course: string,
    yearofstudy: string,
    university: string,
    percentage?: string
}

export type skills = {
    professional: string[],
    technical: string[],
    resposibilities: string[]
}