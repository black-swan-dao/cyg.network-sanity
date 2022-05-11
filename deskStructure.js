import S from "@sanity/desk-tool/structure-builder";

// ICONS
import {
    MdSettings,
    MdReplay,
    MdDescription,
    MdPeople,
    MdThumbUp,
    MdStar,
    MdGavel,
    MdCircle
} from "react-icons/md"

export default () =>
    S.list()
        .title("CYG.NETWORK")
        .items([
            S.listItem()
                .title("General")
                .icon(MdSettings)
                .child(
                    S.editor()
                        .title("General")
                        .id('general')
                        .schemaType("general")
                        .documentId("general")
                ),
            S.divider(),
            S.listItem()
                .title('Instances')
                .icon(MdCircle)
                .child(
                    S.documentList()
                        .title('Instance')
                        .filter('_type == $type')
                        .params({ type: 'instance' })
                ),
            S.listItem()
                .title('All cycles')
                .icon(MdReplay)
                .child(
                    S.documentList()
                        .title('Cycles')
                        .filter('_type == $type')
                        .params({ type: 'cycle' })
                ),
            S.listItem()
                .title('Cycles')
                .icon(MdReplay)
                .child(
                    S.documentTypeList('instance')
                        .title('Cycles by instance')
                        .child(instanceId =>
                            S.documentList()
                                .title('Cycles')
                                .filter('_type == "cycle" && instance._ref == $instanceId')
                                .params({ instanceId })
                        )
                ),
            S.listItem()
                .title('Users')
                .icon(MdPeople)
                .child(
                    S.documentTypeList('instance')
                        .title('Users by instance')
                        .child(instanceId =>
                            S.documentList()
                                .title('Users')
                                .filter('_type == "user" && instance._ref == $instanceId')
                                .params({ instanceId })
                        )
                ),
            S.listItem()
                .title('Resources')
                .icon(MdStar)
                .child(
                    S.documentTypeList('instance')
                        .title('Resources by instance')
                        .child(instanceId =>
                            S.documentList()
                                .title('Resources')
                                .filter('_type == "resource" && instance._ref == $instanceId')
                                .params({ instanceId })
                        )
                ),
            S.listItem()
                .title('Proposals')
                .icon(MdDescription)
                .child(
                    S.list()
                        .title("Proposals")
                        .items([
                            S.listItem()
                                .title('All proposals')
                                .icon(MdDescription)
                                .child(
                                    S.documentList()
                                        .title('All proposals')
                                        .defaultLayout('detail')
                                        .filter('_type == $type')
                                        .params({ type: 'proposal' })
                                ),
                            S.listItem()
                                .title('Proposals by instance')
                                .icon(MdCircle)
                                .child(
                                    S.documentTypeList('instance')
                                        .title('Proposals by instance')
                                        .child(instanceId =>
                                            S.documentList()
                                                .title('Proposals')
                                                .defaultLayout('detail')
                                                .filter('_type == "proposal" && $instanceId == instance._ref')
                                                .params({ instanceId })
                                        )
                                ),
                            S.listItem()
                                .title('Proposals by cycle')
                                .icon(MdReplay)
                                .child(
                                    S.documentTypeList('cycle')
                                        .title('Proposals by cycle')
                                        .child(cycleId =>
                                            S.documentList()
                                                .title('Proposals')
                                                .defaultLayout('detail')
                                                .filter('_type == "proposal" && $cycleId == cycle._ref')
                                                .params({ cycleId })
                                        )
                                ),
                            S.listItem()
                                .title('Proposals by user')
                                .icon(MdPeople)
                                .child(
                                    S.documentTypeList('user')
                                        .title('Proposals by user')
                                        .child(userId =>
                                            S.documentList()
                                                .title('Proposals')
                                                .defaultLayout('detail')
                                                .filter('_type == "proposal" && $userId == authors[]._ref')
                                                .params({ userId })
                                        )
                                ),
                        ])
                ),
            S.listItem()
                .title('Votes')
                .icon(MdThumbUp)
                .child(
                    S.list()
                        .title("Votes")
                        .items([
                            S.listItem()
                                .title('All votes')
                                .icon(MdThumbUp)
                                .child(
                                    S.documentList()
                                        .title('Votes')
                                        .defaultLayout('detail')
                                        .filter('_type == $type')
                                        .params({ type: 'vote' })
                                ),
                            S.listItem()
                                .title('Votes by instance')
                                .icon(MdCircle)
                                .child(
                                    S.documentTypeList('instance')
                                        .title('Votes by instance')
                                        .child(instanceId =>
                                            S.documentList()
                                                .title('Votes')
                                                .defaultLayout('detail')
                                                .filter('_type == "vote" && $instanceId == instance._ref')
                                                .params({ instanceId })
                                        )
                                ),
                            S.listItem()
                                .title('Votes by cycle')
                                .icon(MdReplay)
                                .child(
                                    S.documentTypeList('cycle')
                                        .title('Votes by cycle')
                                        .child(cycleId =>
                                            S.documentList()
                                                .title('Votes')
                                                .defaultLayout('detail')
                                                .filter('_type == "vote" && $cycleId == cycle._ref')
                                                .params({ cycleId })
                                        )
                                ),
                            S.listItem()
                                .title('Votes by user')
                                .icon(MdPeople)
                                .child(
                                    S.documentTypeList('user')
                                        .title('Votes by user')
                                        .child(userId =>
                                            S.documentList()
                                                .title('Votes')
                                                .defaultLayout('detail')
                                                .filter('_type == "vote" && $userId == user._ref')
                                                .params({ userId })
                                        )
                                ),
                        ])
                ),
            S.listItem()
                .title('Results')
                .icon(MdGavel)
                .child(
                    S.documentTypeList('instance')
                        .title('Results by instance')
                        .child(instanceId =>
                            S.documentList()
                                .title('Cycles')
                                .filter('_type == "result" && instance._ref == $instanceId')
                                .params({ instanceId })
                        )
                ),
        ]);