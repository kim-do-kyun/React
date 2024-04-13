import React, {Component} from 'react'

export default class RList extends Component {
    render() {
        // items 속성에 지정한 items 배열을 사용합니다
        const items = this.props.items.split(",")
        // 아이템 목록을 기반으로 li 요소를 생성합니다
        const itemsObj = items.map(
            (e) => {
                return <li>{e}</li>
            }
        )
        //타이틀
        let title = this.props.title
        if (!title) title = "LIST"
        // 렌더링할 내용을 반환합니다
        return (
            <div>
                <h3>{title}</h3>
                <ul>{itemsObj}</ul>
            </div>
        )
    }
}