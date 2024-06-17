import styled from 'styled-components'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'

const Form = styled.form`
    max-width: 500px;

    display: flex;
    flex-direction: column;
    gap: 24px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
        font-weight: 500;
        text-align: right;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 8px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`

function MovieForm() {
    return (
        <Form>
            <Wrapper>
                <FormRow label="Title">
                    <Input type="text" placeholder="Movie name" />
                </FormRow>
                <FormRow label="Description">
                    <Input type="input" as="textarea" placeholder="description" />
                </FormRow>
                <FormRow label="Release year">
                    <Input type="number" placeholder="2020" />
                </FormRow>
                <FormRow label="Genre">
                    <Input type="text" placeholder="Action, Comedy" />
                </FormRow>
                <FormRow label="Cover url ( Optional )">
                    <Input type="url" />
                </FormRow>
            </Wrapper>
            <ButtonWrapper>
                <Button size="medium" var="tertiary" as={Link} to="/">
                    Cancel
                </Button>
                <Button size="medium" var="primary">
                    Add
                </Button>
            </ButtonWrapper>
        </Form>
    )
}

export default MovieForm
