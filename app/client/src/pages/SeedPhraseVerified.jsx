import React from 'react';

import {useHistory} from 'react-router-dom';

import {Button, Checkbox, Container, Grid, Header, Icon, Modal, Radio} from 'semantic-ui-react';

import Page from '../layout/Page';

import { classNames } from 'util/_util';

function SeedPhraseVerified() {

    const [openModal, setOpenModal] = React.useState(false)

    const [enableAdvancedWalletOptions, setEnableAdvancedOptions] = React.useState(false)

    const [curveType, setCurveType] = React.useState(1)

    const history = useHistory();

    return (
        <Page>

            <Grid textAlign="center">

                <Grid.Column width={16} className="my-5">

                    <Header content="Seed Phrase Verified" as="h3" className="my-0"/>

                </Grid.Column>

                <Grid.Column width={16}>

                    <p>You have successfully verified your seed phrase.</p>

                    <p className="text-sm">Using this seed phrase, your first wallet will be generated.</p>

                </Grid.Column>

                <Grid.Column width={10} className="my-20">

                    <Checkbox onChange={() => setEnableAdvancedOptions(prevState => !prevState)}
                              checked={enableAdvancedWalletOptions} className="py-5"
                              label={<label className="text-sm">Enable Advanced Wallet Options</label>}/>

                    <Container className={classNames("p-3 text-left border-2 border-solid border-gray-300", {['bg-gray-300']: !enableAdvancedWalletOptions})}>

                        <p className="border border-black"><strong>Advanced Options</strong></p>

                        <Modal
                            onClose={() => setOpenModal(false)}
                            onOpen={() => setOpenModal(true)}
                            open={openModal}
                            dimmer="inverted"
                            trigger={
                                <p className="text-sm">

                                    <strong>
                                        Public Address Key Operation Curve
                                        <Icon name="question circle" style={{cursor: 'pointer'}} className="px-2"/>
                                    </strong>
                                </p>}
                        >

                            <Modal.Content>

                                <Modal.Description className="flex flex-col items-center gap-10">

                                    <Header content="Key Operation Curve" as="h3" className="my-0"/>

                                    <Container className="flex flex-auto flex-col gap-3 p-5 text-center">

                                        <p>Mad Wallet allows you to set the default ECC for generating the key pair.</p>

                                        <p>ECC types are set on a per vault basis and will be used for all wallets
                                            generated
                                            with this seed.</p>

                                        <p>If you change from the default type, make a note of it for when you import
                                            your
                                            seed for recovery.</p>

                                        <p>Additional wallets of the opposing type can be generated or imported if
                                            necessary, but will not be recoverable by the vault seed phrase.</p>

                                    </Container>

                                    <Button color="purple" onClick={() => setOpenModal(false)} content="Got it!"/>

                                </Modal.Description>

                            </Modal.Content>

                        </Modal>

                        <Container fluid className="flex flex-auto flex-col gap-4">

                            <Radio
                                label='Secp256k1 (default)'
                                name='curveType'
                                value='1'
                                onChange={() => setCurveType(1)}
                                checked={curveType === 1}
                                readOnly={!enableAdvancedWalletOptions}
                            />

                            <Radio
                                label='Barreto-Naehrig'
                                name='curveType'
                                value='2'
                                onChange={() => setCurveType(2)}
                                checked={curveType === 2}
                                readOnly={!enableAdvancedWalletOptions}
                            />

                        </Container>

                    </Container>

                </Grid.Column>

                <Grid.Column width={16} className="flex-col">

                    <Container fluid className="flex flex-auto flex-col items-center gap-2 w-60">

                        <Button color="teal" basic content="Generate My Wallet" fluid
                                onClick={() => history.push('/')}/>

                    </Container>

                </Grid.Column>

            </Grid>

        </Page>
    )

}

export default SeedPhraseVerified;
