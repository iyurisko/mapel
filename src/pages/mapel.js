import React from 'react';
import { Label, Card, Container, Row, Input, Button, Col, ButtonGroup, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Select from "react-select"

class Mapel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: null,
            name: "",
            teacher: "",
            idEdit: "",
            nameEdit: "",
            teacherEdit: "",
            idxDay: 0,
            idxContent: 0,
            isEdit: false,
            data: [
                {
                    day: "Senin", content: [
                        {
                            name: "Aa", teacher: "aa", id: "1"
                        }, {
                            name: "bb", teacher: "bb", id: "11"
                        }, {
                            name: "cc", teacher: "cc", id: "1111"
                        }
                    ]
                },
                {
                    day: "Selasa", content: [{
                        name: "Aa", teacher: "aa", id: "1"
                    }, {
                        name: "bb", teacher: "bb", id: "11"
                    },]
                },
                { day: "Rabu", content: [] },
                { day: "Kamis", content: [] },
                { day: "Jumat", content: [] }
            ],
            daysOptions: [
                { label: "Senin", value: 0 },
                { label: "Selasa", value: 1 },
                { label: "Rabu", value: 2 },
                { label: "Kamis", value: 3 },
                { label: "Jumat", value: 4 }
            ],
         arr:[
             {name:"dd"},
             {name:"dd"},
             {name:"dd"},
             {name:"dd"},
             {name:"dd"},
         ]
        }
    }

    onName = (e) => {
        this.setState({ name: e.target.value })
    }

    onTeacher = (e) => {
        this.setState({ teacher: e.target.value })
    }

    submit() {
        let input = { id: Math.random().toString(), name: this.state.name, teacher: this.state.teacher }
        let arr = this.state.data[this.state.days.value].content
        arr.push(input)
        this.setState({
            name: "",
            teacher: "",
            days: null
        })
    }

    // EDIT
    edit(idxDay, idxContent) {
        let idEdit = this.state.data[idxDay].content[idxContent].id
        let nameEdit = this.state.data[idxDay].content[idxContent].name
        let teacherEdit = this.state.data[idxDay].content[idxContent].teacher
        this.setState({
            idxDay,
            idxContent,
            isEdit: true,
            idEdit,
            nameEdit,
            teacherEdit
        })
    }

    onNameEdit = (e) => {
        this.setState({ nameEdit: e.target.value })
    }

    onTeacherEdit = (e) => {
        this.setState({ teacherEdit: e.target.value })
    }

    //Delete

    deleteItem = (a, b, c) => {
        let data = [...this.state.data]
        data[a].content = this.state.data[a].content.filter(v => v.id !== c)
        this.setState({ data })

    }

    save() {
        const { idxDay, idxContent } = this.state;
        let item = { id: this.state.idEdit, name: this.state.nameEdit, teacher: this.state.teacherEdit };
        let data = [...this.state.data]
        data[idxDay].content[idxContent] = item
        this.setState({
            data,
            isEdit: false
        })
    }

    gaga = () => {
        let arr = [...this.state.arr]
        arr[0].tes = "sss"

        
        this.setState({arr})
        console.log(arr)
    }



    render() {
    let ss =[
        {
          "UniqId": "SEVA-FORM-aha15343-000201"
        },
        {
          "UniqId": "SEVA-FORM-aha15343-000001"
        },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000002"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000003"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000004"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000005"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000006"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000007"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000008"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000009"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000010"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000011"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000012"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000013"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000014"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000015"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000016"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000017"
        // },
        // {
        //   "UniqId": "SEVA-FORM-aha15343-000018"
        // }
      ]
    console.log(ss.map(v=> v.UniqId))
let as = ["ssas","aaa"]
console.log(as)
        return (
            <Container style={{ marginLeft: "10PX", marginRight: "10PX" }}>
                <span onClick={() => this.gaga()}>x</span>
                <Row>
                    {this.state.data.map((v, idc) => (

                        <Card key={idc} style={{ width: "500px", margin: "15px" }}>
                            <Label> {v.day}</Label>

                            {v.content.map((v, idx) => (
                                <Row key={idx}>
                                    <Col md={8} >
                                        <Card style={{ width: "300px", margin: "15px" }}>
                                            <Label>Mapel:{v.name}</Label>
                                            <Label>Guru: {v.teacher}</Label>
                                        </Card>

                                    </Col>
                                    <Col md={4}>
                                        <ButtonGroup>
                                            <Button color="warning" onClick={() => this.edit(idc, idx)} style={{ height: "40px", marginTop: "20px" }} > Edit </Button>
                                            <Button color="danger" style={{ height: "40px", marginTop: "20px" }} onClick={() => this.deleteItem(idc, idx, v.id)} > Delete </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            ))}
                        </Card>


                    ))}
                </Row>

                <Row>
                    <Card>
                        <Label>Form Input</Label>
                        <Select
                            value={this.state.days}
                            onChange={selected => this.setState({ days: selected })}
                            placeholder="Pilih Hari"
                            options={this.state.daysOptions}
                        />
                        <Input value={this.state.name} onChange={(e) => this.onName(e)} />
                        <Input value={this.state.teacher} onChange={(e) => this.onTeacher(e)} />
                        <Button onClick={() => this.submit()} color="success"> Save</Button>
                    </Card>
                </Row>

                <Modal isOpen={this.state.isEdit}>
                    <ModalHeader > Edit Data</ModalHeader>
                    <ModalBody>
                        <Input value={this.state.nameEdit} onChange={(e) => this.onNameEdit(e)} />
                        <Input value={this.state.teacherEdit} onChange={(e) => this.onTeacherEdit(e)} />
                        <Button onClick={() => this.save()} color="success"> Tets</Button>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}


export default Mapel;
