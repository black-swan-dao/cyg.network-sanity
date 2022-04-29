// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import cycle from "./Cycle.js"
import proposal from "./Proposal.js"
import resource from "./Resource.js"
import user from "./User.js"
import simpleEditor from './SimpleEditor.js'
import contentEditor from './ContentEditor.js'
import embedBlock from './Embed'
import videoBlock from './Video'
import audioBlock from './Audio'
import voteAllocation from './VoteAllocation.js'
import vote from './Vote.js'
import result from './Result.js'
import general from './General.js'
import instance from './Instance.js'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    result, voteAllocation, vote, cycle, proposal, resource, user, simpleEditor, contentEditor, embedBlock, videoBlock, audioBlock, general, instance
  ]),
})
