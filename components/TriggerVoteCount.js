import React from "react"
import PropTypes from "prop-types"
import { withDocument } from "part:@sanity/form-builder"
import FormField from "part:@sanity/components/formfields/default"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import classNames from "classnames"
import "./triggerVoteCount.css?raw"

const createPatchFrom = (value) =>
    PatchEvent.from(value === "" ? unset() : set(value))

class TriggerVoteCount extends React.Component {
    // // 5. Declare shape of React properties
    static propTypes = {
        type: PropTypes.shape({
            title: PropTypes.string,
        }).isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    }

    message = ""
    working = false
    error = false

    hitServer = (t) => {
        this.message = ""
        this.working = true
        this.error = false
        this.forceUpdate()

        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Access-Control-Allow-Origin", "*")

        var raw = JSON.stringify(this.props.document)

        var requestOptions = {
            method: "POST",
            body: raw,
            // headers: myHeaders,
            redirect: "follow",
        }

        const url = "https://trust-cygnet.netlify.app/.netlify/functions/count-votes"

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                this.message = "Vote counted successfully"
                this.working = false
                createPatchFrom(Date.now())
                console.dir(result)
                this.forceUpdate()
            })
            .catch((error) => {
                this.message = "Vote count failed: " + error
                this.working = false
                this.error = true
                console.log("error", error)
                this.forceUpdate()
            })
    }

    render = () => {
        const { value } = this.props

        return (
            <FormField>
                <div className="container">
                    <button
                        className={classNames({
                            triggerButton: true,
                            working: this.working,
                            error: this.error,
                        })}
                        onClick={this.hitServer}
                    >
                        Count votes for cycle
                    </button>
                    <div
                        className={classNames({
                            message: true,
                            error: this.error,
                        })}
                    >
                        {this.message}
                    </div>
                </div>
            </FormField>
        )
    }
}

export default withDocument(TriggerVoteCount)
