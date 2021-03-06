var status = -1;
var sel = -1;
var talk = [["제작 모드에서는 #bV 코어 조각을 사용#k해서 그대가 #b원하는 코어를 제작#k할 수 있소.",
        "참고로 V 코어 조각은 #b사용하지 않는 코어를 분해#k해서 획득할 수 있소. 코어의 종류, 등급에 따라 획득할 수 있는 조각의 개수가 달라지게 되오.",
        "원하는 코어를 만드는 대신 조각을 합쳐 코어젬스톤으로 만드는 방법도 있소. V 코어 조각의 소모가 비교적 적지만 무슨 코어가 나올지는 모르게 되지."],
    ["제작 모드에서는 #b존재하는 모든 코어가 목록에 표시#k된다오.", "먼저 #b페이지를 넘겨 원하는 코어를 찾거나 검색 기능을 이용#k해서 코어를 찾으시오.",
        "코어를 선택해서 코어의 효과를 확인한 뒤 '제작하기' 버튼을 눌러 코어를 제작할 수 있소.",
        "코어를 만들 때에는 V 코어 조각이 꼭 필요하오. #bV 코어 조각은 사용하지 않는 코어를 분해해서 획득#k할 수 있다는 점, 기억하시오.",
        "참고로 코어젬스톤을 통해 강화 코어를 얻을 때와 마찬가지로 강화 대상 스킬은 1가지 고정, 2가지 무작위로 부여된다는 점 알아 주시오."],
    ["코어젬스톤을 만들려거든 '제작하기' 버튼을 누르는 대신 그 위의 #b'코어젬스톤 제작' 버튼#k을 누르시오.",
        "비교적 V 코어 조각의 소모가 적지만 무작위 코어를 획득할 수 있는 코어젬스톤 원석이란 점은 기억해 주시오."],
    ["그렇군. 궁금한 것이 있다면 언제든지 질문해 주시오."]];
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (sel != -1) {
        if (talk[sel].length == (status - 1)) {
            status = 0;
        }
    }
    if (status == 0) {
	sel = -1;
        cm.sendSimpleS("제작 모드에 대해 궁금한 것이 있소?\r\n\r\n#L0##b제작 모드에 대한 설명#l\r\n#L1#원하는 코어를 제작하는 방법#l\r\n#L2#코어젬스톤을 제작하는 방법#l\r\n#L3#궁금한 것이 없습니다.#l", 4);
    } else {
        if (sel == -1) {
            sel = selection;
        }
        if (sel == 3) {
            cm.sendOkS(talk[3][0], 4);
            cm.dispose();
        } else {
            var idx = status - 1;
            if (idx == 0) {
                cm.sendNextS(talk[sel][idx], 4);
            } else {
                cm.sendNextPrevS(talk[sel][idx], 4);
            }
        }
    }
}