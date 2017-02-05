class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.states = config.states;
        this.initialState = config.initial;
        this.currentState = config.initial;
        this.history = [];
        this.undoHistory = [];
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.currentState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (this.states.hasOwnProperty(state)) { 
            this.currentState = state;
            this.history.push(this.currState); 
        } else {
            throw new Error
        }
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.currentState = this.initialState;
        this.clearHistory();
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        this.states = [];
        if (!event) {
            for (var state in this.config.states){
                if (this.config.states[state].transitions.hasOwnProperty(event)) {
                    this.states.push(state)
                }
            }
        }
        return this.states;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {
        this.history = [];
        this.undoHistory = [];
    }

}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
