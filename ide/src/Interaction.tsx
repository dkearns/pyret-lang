import React from 'react';

type InteractionProps = {
    name: string,
    value: any
};

type InteractionState = {};

export class Interaction extends React.Component<InteractionProps, InteractionState> {
    format = (name: string, value: any) => {
        return (
            <div>
                {name} = {value}
            </div>
        );
    };

    convert = (name: string, value: any) => {
        if (typeof value === 'number') {
            return this.format(name, value.toString());
        } else if (typeof value === 'string') {
            return this.format(name, `"${value}"`);
        } else if (typeof value === 'boolean') {
            return this.format(name, value.toString());
        } else if (typeof value === 'function') {
            // TODO(michael) can we display more info than just <function> ?
            return this.format(name, "<function>");
        } else if (typeof value === 'object') {
            // TODO(michael) palceholder for better object display
            return this.format(name, JSON.stringify(value));
        }
    };

    render() {
        return (
            <div>
                {this.convert(this.props.name, this.props.value)}
            </div>
        )
    };
}