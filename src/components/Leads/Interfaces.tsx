export interface IPipelineBasic {
    id: string;
    name: string;
}

export interface IStage {
    id: string;
    name: string;
}

export interface IPipeline {
    id: string;
    locationID: string;
    name: string;
    stages: IStage[];
}

export interface IOpportunity {
    id: string;
    locationID: string;
    contactID: string;
    pipelineID: string;
    pipelineStageID: string;
    name: string;
    status: string;
    leadValue: string;
    source: string;
    addedOn: string;
    updatedOn: string;
}
