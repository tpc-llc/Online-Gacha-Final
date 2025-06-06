// 多言語翻訳定義
export const translations = {
    ja: {
        common: {
            myPage: "マイページ",
            settings: "設定",
            menu: "メニュー",
            add: "追加",
            delete: "削除",
            save: "保存する",
            cancel: "キャンセル",
            edit: "編集する",
            search: "検索",
            searching: "検索中...",
            loading: "読み込み中...",
            error: "エラー",
            success: "完了しました",
            page: "ページ",
            next: "次へ",
            previous: "前へ",
            actions: {
                retry: "再試行",
                // ... other action translations
            }
        },
        share: {
            title: "シェア方法を選択",
            instagram: {
                notAvailable: "Instagramでの直接共有はできません。URLをコピーして手動で共有してください。"
            }
        },
        forgotPassword: {
            title: "パスワードをリセット",
            description: "メールアドレスを入力してください。パスワードリセットのリンクをお送りします。",
            email: {
              label: "メールアドレス",
              placeholder: "メールアドレスを入力",
              invalid: "有効なメールアドレスを入力してください"
            },
            submit: {
              default: "リセットリンクを送信",
              loading: "送信中..."
            },
            toast: {
              success: {
                title: "メールをご確認ください",
                description: "アカウントが存在する場合、パスワードリセットの手順をメールでお送りしました。"
              },
              error: {
                title: "エラーが発生しました",
                description: "処理中にエラーが発生しました。後ほど再度お試しください。"
              }
            }
          },
        resetPassword: {
            title: "パスワードのリセット",
            description: "新しいパスワードを設定してください",
            form: {
              newPassword: "新しいパスワード",
              confirmPassword: "パスワード（確認用）",
              submit: "パスワードを変更する",
              submitting: "処理中...",
            },
            toast: {
              error: {
                invalidToken: "リセットトークンが無効です",
                failed: "パスワードのリセットに失敗しました。もう一度お試しください。"
              },
              success: "パスワードが正常に変更されました"
            }
          },
        otp: {
            title: "認証コードの確認",
            description: "{email}に送信された認証コードを入力してください",
            label: "認証コード",
            placeholder: "6桁のコードを入力",
            verify: "確認する",
            verifying: "確認中...",
            resend: "認証コードを再送信",
            success: "認証が完了しました",
            resendSuccess: "認証コードを再送信しました",
            errors: {
                invalidEmail: "メールアドレスが無効です",
                verification: "認証に失敗しました",
                resend: "認証コードの再送信に失敗しました"
            }
        },
        notifications: {
            title: "通知一覧",
            empty: "通知はありません",
            markAsRead: "既読にする",
            all: "すべての通知",
            unread: "未読の通知",
            sendSuccess: "通知を送信しました",
            sendError: "通知の送信に失敗しました",
            loadError: "通知の読み込みに失敗しました",
            markAsReadSuccess: "既読にしました",
            markAsReadError: "既読の設定に失敗しました",
            form: {
                type: {
                    label: "通知タイプ",
                    placeholder: "通知タイプを選択",
                    options: {
                        app: "アプリ内通知",
                        email: "メール通知",
                        push: "プッシュ通知"
                    }
                },
                title: {
                    label: "タイトル",
                    placeholder: "通知のタイトルを入力"
                },
                content: {
                    label: "内容",
                    placeholder: "通知の内容を入力"
                },
                submit: "通知を送信"
            }
        },
        inventory: {
            status: {
                title: "在庫状況",
                table: {
                    itemName: "アイテム名",
                    quantity: "在庫数",
                    percentage: "在庫割合",
                    threshold: "アラート閾値 (%)",
                    status: "ステータス"
                },
                status: {
                    low: "在庫わずか",
                    normal: "在庫あり"
                },
                mobile: {
                    itemName: "アイテム名:",
                    quantity: "在庫数:",
                    percentage: "在庫割合:",
                    threshold: "アラート閾値 (%):",
                    status: "ステータス:"
                }
            }
        },
        navigation: {
            originalGacha: "オリジナルガチャ",
            gachaRanking: "ガチャランキング",
            exchange: "交換所",
        },
        securitySettings: {
            ipRestriction: {
                title: "IP制限",
                description: "特定のIPアドレスからのアクセスのみを許可します"
            },
            logMonitoring: {
                title: "ログ監視",
                description: "セキュリティログの監視を有効にします"
            },
            alertEmail: {
                title: "アラート通知メールアドレス",
                placeholder: "alert@example.com"
            },
            button: {
                save: "設定を保存",
                saving: "保存中..."
            },
            toast: {
                success: "セキュリティ設定を更新しました",
                error: "設定の更新に失敗しました"
            },
            error: "エラーが発生しました: {error}"
        },
        terms: {
            title: "利用規約",
            lastUpdated: "最終更新日: {date}",
            established: "制定日: {date}",
            sections: {
                introduction: {
                    title: "第１章 総則",
                    content: "本利用規約（以下「本利用規約」といいます。）には、合同会社OMOTENASHI（以下「当社」といいます。）の提供するインターネットサービス「SIJOHN」において、当社が提供する各種サービス（理由の如何を問わずサービスの名称又は内容が変更された場合は、当該変更後のサービスを含みます。以下「本サービス」といいます。） のご利用に際して、ユーザーの皆様が遵守する必要のある事項及び当社とユーザーの皆様との間の権利義務関係が定められております。本サービスをご利用になる方は、必ず本利用規約の全文お読みいただき、本利用規約に同意の上、ご利用下さいますようお願いいたします。"
                },
                registration: {
                    title: "第1条 本サービスの内容及び当社の役割",
                    content: "本サービスは、トレーディングカード等の販売・マーケットプレイスサービスです。\n本サービスの内容は、本利用規約及び当社が別途定めるガイド、当社のウェブサイトに掲載する利用条件等に規定するとおりとします。\n当社が本サービスにおいて自らトレーディングカード等の買取・販売を行う場合、出品者又は購入者としての当社には本利用規約のマーケットプレイスサービスに関する規定は適用されないものとします。"
                },
                accountManagement: {
                    title: "第2条 定義",
                    content: "本利用規約において、以下の用語は、別途定義されている場合及び文脈上別異に解すべきことが明確である場合を除き、以下の意味を有するものとします。本条の定義は本規約においても適用されるものとします。\n\n「本規約」とは、本利用規約、別途当社の定める利用規約、ガイド及び当社のウェブサイトに掲載する利用条件等をいい、これらはすべて本規約を構成するものとします。\n「プライバシーポリシー」とは、当社が定めるプライバシーポリシー（名称の如何を問わないものとします。）をいいます。\n「ガイド」とは、当社が定める本サービスに関するガイドをいいます。\n「ユーザー」とは、本規約の内容に同意して、日本国内において本サービスを利用する個人又は法人をいいます。\n「個人情報」とは、個人情報の保護に関する法律第2条第1項に定義される個人情報に該当するものをいいます。\n「商品」とは、トレーディングカードその他の商品をいいます。\n「コンテンツ」とは、当社又はユーザーが本サービスに掲載・発信した情報をいいます。\n「チャット」とは、本サービス上でユーザー同士がメッセージを送受信し合うことができる機能をいいます。\n「利用契約」とは、ユーザーと当社との間に成立し、本規約が適用される本サービスの利用にかかる契約をいいます。\n「販売サービス」とは、当社がユーザーに商品を販売するサービスをいいます。"
                },
                prohibitedMatters: {
                    title: "4. 禁止事項",
                    content: `ユーザーは、本サービスの利用にあたり、以下の行為をしてはいけません。
      
      ・法令または公序良俗に違反する行為
      ・犯罪行為に関連する行為
      ・当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
      ・当社のサービスの運営を妨害するおそれのある行為
      ・他のユーザーに関する個人情報等を収集または蓄積する行為
      ・不正アクセスをし、またはこれを試みる行為
      ・他のユーザーに成りすます行為
      ・当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
      ・その他、当社が不適切と判断する行為`
                },
                serviceStop: {
                    title: "5. サービスの提供の停止等",
                    content: `当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
      
      ・本サービスにかかるコンピューターシステムの保守点検または更新を行う場合
      ・地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
      ・コンピューターまたは通信回線等が事故により停止した場合
      ・その他、当社が本サービスの提供が困難と判断した場合
      
      当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。`
                },
                usageRestrictions: {
                    title: "6. 利用制限およびその解除等",
                    content: `当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
      
      ・本規約のいずれかの条項に違反した場合
      ・登録事項に虚偽の事実があることが判明した場合
      ・料金等の支払債務の不履行があった場合
      ・当社からの連絡に対し、一定期間返答がない場合
      ・本サービスについて、最終の利用から一定期間利用がない場合
      ・その他、当社が本サービスの利用を適当でないと判断した場合
      
      当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。`
                },
                disclaimer: {
                    title: "7. 保証の否認および免責事項",
                    content: `当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
      
      当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。`
                },
                serviceChanges: {
                    title: "8. サービス内容の変更等",
                    content: "当社は、ユーザーへの事前の告知なしに、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。"
                },
                termsChanges: {
                    title: "9. 利用規約の変更",
                    content: "当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を継続した場合には、当該ユーザーは変更後の規約に同意したものとみなします。"
                },
                privacy: {
                    title: "10. 個人情報の取扱い",
                    content: "当社は、本サービスの利用によって取得する個人情報については、当社「プライバーシーポリシー」に従い取り扱うものとします。"
                },
                notifications: {
                    title: "11. 通知または連絡",
                    content: "ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が定める方法に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。"
                },
                rightsTransfer: {
                    title: "12. 権利義務の譲渡の禁止",
                    content: "ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。"
                },
                governing: {
                    title: "13. 準拠法・裁判管轄",
                    content: "本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。"
                },
                disclaimer: {
                    title: "第6条 ユーザーの退会",
                    content: "ユーザーは、当社の定める方法で当社に退会を希望する旨を問い合わせ、当社の判断により認められた場合には退会することができます。\n前項の規定にかかわらず、取引の決済や商品の郵送や商品代金の引出申請等取引の手続が未了のものがある場合は、ユーザーは退会することができず、当該ユーザーは、一連の未了の取引を本規約に従って遅滞なく円滑に進め、完了させた後、当社の定める方法で当社に再度問い合わせを行わなければなりません。\n当社は、本条の措置によりユーザーに生じる損害について、一切の責任を負わないものとします。"
                },
                serviceChanges: {
                    title: "第7条 個人情報等の取扱い",
                    content: "当社は、本規約のほか、プライバシーポリシーに従って個人情報等を取り扱います。\nユーザーは、本サービスの利用又は本サービスの閲覧の前に、本サービス上で、プライバシーポリシーを必ず確認し、その内容に同意した上で、本サービスを利用するものとします。\n当社は、本サービスを通じて得た個人情報等に関して、プライバシーポリシーの利用目的として記載された事項及び本サービス全般の提供のために利用することができるものとします。\n当社は、本サービスによる商品の売買に関するユーザー間のトラブルの解決のため当社が必要と判断した場合、他のユーザーにユーザーの連絡先を提供することがあります。かかる提供について、ユーザーは予め同意するものとします。\n当社は、クレジットカードの第三者による不正利用を防止することを目的として、第三者に対して個人情報を提供することがあります。かかる提供について、ユーザーは予め同意するものとします。\nユーザーは、本サービスを通じて得た個人情報等の取扱いにあたっては、個人情報の保護に関する法律その他の法令に従うものとします。"
                },
                termsChanges: {
                    title: "第8条 禁止事項",
                    content: "当社は、本サービスの利用に関して、ユーザー及び第三者の以下の各号に該当すると当社が判断する行為（以下「禁止事項」といいます。）を禁止し、ユーザーは故意又は過失の有無にかかわらず禁止事項に該当する行為を行うことが本規約違反とみなされることを同意します。以下の禁止事項は、当社により適宜追加修正される場合があり、ユーザーは、実際に本サービスを利用される際には、常に最新の内容を確認する義務を負うものとします。\n\n他のユーザーとの関係等について\n他のユーザーのユーザー資格を利用して当社のサービスを利用すること\n当社又は他のユーザーの利益を侵害すること\n当社若しくは他のユーザーの著作権を含む知的財産権その他の権利を侵害すること又はそのおそれのある行為\n他のユーザーが、理解することができなかったり、誤解や混乱をしたりするおそれのある行為\n他のユーザーのプライバシーを侵害したり、名誉を毀損したり、精神的損害を与えること\n当社の所定の手続以外で、ユーザー本人又は他のユーザーの個人に関する情報（本名、住所、電子メールアドレス及び電話番号を含むあらゆる連絡先）を発信若しくは掲載すること\n当社又は他のユーザーに経済的損害を与えること\n他のユーザーに損害を与えること\n他のユーザーが迷惑や不快を感じるおそれのある行為\n他のユーザーと紛争が生じる可能性のある行為\n民族差別・人種差別を意識させたり、それらにつながる行為\n\nその他\n法令等又は本規約に違反する行為\n本規約の趣旨に照らして不適切な行為\n当社のご利用上の注意に反する行為\n当社のサービス運営を妨げること\n自分の氏名又は自己のユーザーID以外の人物を名乗ること\n青少年の心身に悪影響を与える行為\n公序良俗に反する行為\n倫理的視点で認められないと当社が判断する行為\n当社の事前の書面による許可なく、当社のサービス外のところで、商業目的で、当社が提供するあらゆるサービス、コンテンツ、情報、システム、機能、プログラム等の全部又は一部を利用すること\n商業用の広告、宣伝を目的とした行為\n当社が運営する以外のウェブサイトやリソースへリンクを貼ること\n勧誘活動等を行うこと\n選挙運動に関するあらゆる行為\nコンピュータ・ウィルスの送信等、コンピュータの機器や通信回線、ソフトウェア等の機能に悪影響を及ぼす行為\n当社が提供するサービスに繋がっているサーバーやネットワークに対して悪影響を及ぼすこと\n当社がサービスを提供する上で関係するあらゆるシステムに対して、不正にアクセスすること\n当社が提供するインターフェイスとは別の手法を用いてサービスにアクセスすること\n当社のウェブサイトに関連するシステムやソフトウェアのセキュリティホールやエラー、バグ等を利用した行為\n当社のウェブサイトに関連するシステムやソフトウェア、プロトコル等をリバースエンジニアリングや逆アセンブル等の手法により解読する行為、これらを改ざん、修正等する行為、及び、これらを複製、二次利用する行為\nマネー・ロンダリングを目的とした行為\nその他、当社が不適切と考える行為"
                }
            },
            footer: {
                conclusion: "以上"
            }
        },
        settings: {
            languageSettings: "言語設定",
            lineSettings: "LINE設定",
            otherSettings: "その他の設定",
            ipRestriction: "IP制限",
            logMonitoring: "ログ監視",
            alertEmail: "アラートメール",
            other: {
                title: "その他の設定",
                links: {
                    faq: "よくある質問",
                    terms: "利用規約",
                    privacy: "プライバシーポリシー",
                    legal: "法的情報",
                },
                deleteAccount: {
                    button: "アカウントを削除",
                    confirmTitle: "アカウントを削除しますか？",
                    confirmDescription: "この操作は取り消すことができません。全てのデータが削除されます。",
                    confirmButton: "削除する",
                    success: "アカウントが削除されました",
                    error: "アカウントの削除に失敗しました",
                },
                logout: {
                    title: "ログアウト",
                    success: "ログアウトしました",
                    error: "ログアウトに失敗しました"
                }
            },
        },
        profile: {
            pageTitle: "マイページ",
            tabs: {
                profile: "プロフィール",
                inventory: "商品リスト",
                inviteCode: "招待コード",
                pointHistory: "ポイント履歴",
                settings: "設定",
            },
            form: {
                title: "基本情報",
                fields: {
                    name: "氏名",
                    postalCode: "郵便番号",
                    address: "住所",
                    phone: "電話番号",
                },
                submit: "保存する",
                success: "プロフィールを更新しました",
                error: "プロフィールの更新に失敗しました",
                validation: {
                    nameRequired: "名前を入力してください",
                    postalCodeRequired: "郵便番号を入力してください",
                    postalCodeFormat: "正しい郵便番号形式で入力してください",
                    addressRequired: "住所を入力してください",
                    phoneRequired: "電話番号を入力してください",
                    phoneFormat: "正しい電話番号形式で入力してください"
                },
                placeholder: {
                    postalCode: "123-4567",
                    phone: "090-1234-5678"
                }
            },
            inventory: {
                filter: {
                    all: "全部",
                    rare: "レア",
                    super_rare: "スーパーレア",
                    normal: "ノーマル"
                },
                refresh: "更新",
                exchangeSuccess: "ポイント交換が完了しました",
                exchangeError: "ポイント交換に失敗しました",
                exchangePoints: "ポイントに交換",
                shipSuccess: "発送リクエストが完了しました",
                shipSuccessDescription: "商品の発送手続きを開始しました",
                shipError: "発送リクエストに失敗しました",
                shipErrorDescription: "発送リクエストの処理中にエラーが発生しました。後でもう一度お試しください。",
                fetchError: "商品リストの取得に失敗しました",
                card: {
                    name: "ポケモンカード #{number}",
                    rarity: "レア度",
                    unselected: "未選択"
                },
                actions: {
                    exchange: "交換する",
                    ship: "発送を依頼する"
                },
                status: {
                    exchanged: "交換済み",
                    shipped: "発送済み",
                    shipping: "発送手続き中",
                    available: "在庫あり"
                },
                noItems: "アイテムがありません",
                noItemsDescription: "ガチャを引いて、アイテムを獲得しましょう！",
                settings: {
                    title: "在庫管理設定",
                    globalThreshold: "グローバルアラート反映値 (%)",
                    notificationMethod: "通知方法",
                    realTimeUpdates: "リアルタイム更新",
                    saveSettings: "設定を保存",
                    saveSuccess: "設定を保存しました",
                    saveError: "設定の保存に失敗しました",
                    notifications: {
                        line: "LINE",
                        email: "メール",
                        slack: "Slack"
                    }
                },
                obtained: "獲得日",
                exchange: {
                    confirmTitle: "ポイント交換の確認",
                    confirmDescription: "{itemName}をポイントに交換しますか？",
                    confirm: "交換する"
                },
                ship: {
                    confirmTitle: "発送リクエストの確認",
                    confirmDescription: "{itemName}の発送を依頼しますか？",
                    confirm: "発送を依頼"
                },
            },
            invite: {
                title: "招待コード",
                copy: {
                    success: "コピーしました",
                    error: "コピーに失敗しました"
                },
                share: {
                    x: "Xでシェア",
                    facebook: "Facebookでシェア",
                    message: "SHIJONに参加しよう！招待コード: {code}"
                },
                stats: {
                    total: "総招待数",
                    successful: "成功した招待",
                    pending: "保留中の招待"
                }
            },
            inviteForm: {
                title: "招待コードを入力",
                label: "招待コード",
                placeholder: "招待コードを入力してください",
                submit: "送信",
                messages: {
                    required: "招待コードを入力してください",
                    success: "招待コードを送信しました",
                    error: "エラーが発生しました"
                }
            },
            points: {
                balance: {
                    title: "ポイント残高",
                    unit: "pt",
                    purchase: "ポイントを購入",
                    purchaseTitle: "ポイント購入",
                    enterAmount: "購入するポイント数を入力してください",
                    confirmPurchase: "購入を確定",
                    invalidAmount: "有効なポイント数を入力してください",
                    purchaseSuccess: "購入完了",
                    purchaseSuccessDetail: "{amount}ポイントを購入しました",
                    purchaseError: "購入処理に失敗しました"
                },
                history: {
                    title: "ポイント履歴",
                    table: {
                        date: "日付",
                        description: "説明",
                        points: "ポイント",
                        balance: "残高"
                    },
                    noTransactions: "取引履歴がありません",
                    items: {
                        purchase: "ポイント購入",
                        gacha: "ガチャ利用",
                        exchange: "アイテム交換",
                        bonus: "ボーナスポイント",
                        refund: "返金",
                        campaign: "キャンペーン特典",
                        admin: "管理者付与",
                        unknown: "その他"
                    }
                }
            },
            stats: {
                total: "総招待数",
                successful: "成功した招待",
                pending: "保留中の招待"
            }
        },
        line: {
            title: "LINE連携",
            notifications: "LINE通知",
            connect: "LINEアカウントを連携する",
            disconnect: "LINE連携を解除する",
            notificationsDescription: "LINEで通知を受け取る",
            copyCode: "接続コードをコピー",
            codeCopied: "コピー完了！",
            connectionStatus: {
                connected: "連携済み",
                disconnected: "未連携",
            },
            profile: {
                image: {
                    title: "プロフィール画像",
                    alt: "プロフィール画像",
                    dragOrClick: "画像をドラッグ＆ドロップ、またはクリックして選択",
                    dropHere: "ここに画像をドロップ",
                    formats: "対応形式: JPG, PNG, GIF",
                    maxSize: "最大サイズ: 5MB",
                    uploading: "アップロード中...",
                    success: {
                        upload: "画像をアップロードしました",
                        delete: "画像を削除しました"
                    },
                    error: {
                        upload: "画像のアップロードに失敗しました",
                        delete: "画像の削除に失敗しました",
                        fileSize: "ファイルサイズが大きすぎます（最大5MB）"
                    }
                }
            },
            messages: {
                connectSuccess: "LINEアカウントの連携が完了しました",
                connectError: "LINEアカウントの連携に失敗しました",
                disconnectSuccess: "LINE連携を解除しました",
                disconnectError: "LINE連携の解除に失敗しました",
                notificationSuccess: "LINE通知設定を更新しました",
                notificationError: "LINE通知設定の更新に失敗しました",
                loginUrlError: "LINEログインURLの取得に失敗しました",
                codeCopied: "接続コードをクリップボードにコピーしました",
                copyError: "コードのコピーに失敗しました",
            },
            connectionInstructions: {
                title: "LINEアカウントを連携するには以下の手順に従ってください：",
                step1: "上の「連携する」ボタンをクリックして公式LINEアカウントを追加",
                step2: "下の「接続コードをコピー」ボタンをクリックして固有のコードをコピー",
                step3: "コピーしたコードを公式LINEアカウントに送信して連携を完了",
              },
        },
        form: {
            required: "必須",
            enterName: "名前を入力してください",
            enterEmail: "メールアドレスを入力してください",
            enterValidEmail: "有効なメールアドレスを入力してください",
            enterTitle: "タイトルを入力してください",
            enterContent: "内容を入力してください",
            selectCategory: "カテゴリーを選択してください",
            agreeToPrivacyPolicy: "プライバシーポリシーに同意する必要があります",
        },
        product: {
            title: "すべてのガチャ",
            sort: {
                recommended: "おすすめ順",
                newest: "新着順",
                priceAsc: "価格が安い順",
                priceDesc: "価格が高い順",
            },
            category: {
                all: "すべて",
                new: "新着",
                popular: "人気",
                sale: "セール中",
                other: "その他"
            },
            rating: {
                fiveStars: "★ 5.0以上",
                fourStars: "★ 4.0以上",
                threeStars: "★ 3.0以上",
            },
            filter: {
                title: "フィルター",
                category: "カテゴリー",
                price: "価格",
                rating: "評価",
                priceMin: "最小",
                priceMax: "最大",
            },
            loadMore: "もっと読み込む"
        },
        footer: {
            company: {
                description: "最高のオンラインガチャ体験をお届けします。"
            },
            links: {
                title: "リンク",
                about: "会社概要",
                terms: "利用規約",
                privacy: "プライバシーポリシー",
                legal: "特定商取引法に基づく表記",
                contact: "お問い合わせ"
            },
            social: {
                title: "フォローする",
                twitter: "Twitter",
                instagram: "Instagram"
            },
            copyright: "© 2025 合同会社 OMOTENASHI. All rights reserved."
        },
        messages: {
            confirmDelete: "本当に削除しますか？",
            confirmDeleteAccount: "本当に退会しますか？",
            deleteAccountWarning: "この操作は取り消すことができません。全てのデータが削除されます。",
            settingsSaved: "設定を保存しました",
            settingsError: "設定の保存に失敗しました",
            categoryAdded: "カテゴリーを追加しました",
            categoryDeleted: "カテゴリーを削除しました",
        },
        about: {
            title: "会社概要",
            companyName: "会社名",
            companyNameValue: "合同会社 OMOTENASHI",
            established: "設立",
            establishedValue: "2023年4月1日",
            representative: "代表者",
            representativeValue: "岩村 雄二",
            address: "所在地",
            addressValue: "〒104-0061 東京都中央区銀座1-12-4 N&E BLD.7階",
            business: "事業内容",
            businessValue: "オンラインゲームの企画・開発・運営\nトレーディングカードの販売\nデジタルコンテンツの制作",
            phone: "電話番号",
            phoneValue: "03-4222-3343",
            email: "メールアドレス",
            emailValue: "info@oripa-shijon.com",
            url: "URL",
            urlValue: "https://oripa-shijon.com/",
            copyright: "© 2023-2025 合同会社 OMOTENASHI All Rights Reserved."
        },
        contact: {
            pageTitle: "お問い合わせ",
            form: {
                placeholders: {
                    name: "お名前",
                    email: "メールアドレス",
                    category: "選択してください",
                    message: "お問い合わせ内容"
                },
                categories: {
                    general: "一般的な質問",
                    technical: "技術的な問題",
                    billing: "お支払いについて",
                    other: "その他"
                },
                privacy: {
                    link: "に同意します",
                    agreement: "プライバシーポリシー"
                },
                submit: "送信する",
                notice: "お問い合わせの内容によっては、回答までにお時間をいただく場合がございます。あらかじめご了承ください。",
                success: "お問い合わせを送信しました",
                error: "送信に失敗しました。もう一度お試しください",
                submitting: "送信中...",
                validation: {
                    nameRequired: "お名前を入力してください",
                    emailInvalid: "有効なメールアドレスを入力してください",
                    categoryRequired: "カテゴリーを選択してください",
                    messageRequired: "メッセージを入力してください",
                    privacyRequired: "プライバシーポリシーに同意してください"
                }
            }
        },
        login: {
            title: "ログイン",
            description: "アカウントにログインしてガチャを楽しもう！",
            error: "ログインに失敗しました",
            success: {
                title: "ログイン成功",
                description: "ログインしました"
            },
            form: {
                email: {
                    label: "メールアドレス",
                    placeholder: "example@example.com",
                    error: "有効なメールアドレスを入力してください"
                },
                password: {
                    label: "パスワード",
                    error: "パスワードは8文字以上で入力してください"
                },
                submit: "ログイン",
                submitting: "ログイン中..."
            },
            forgotPassword: "パスワードをお忘れですか？",
            noAccount: "アカウントをお持ちでない方は",
            signUp: "新規登録"
        },
        signup: {
            title: "新規登録",
            description: "アカウントを作成してガチャを楽しもう！",
            haveAccount: "すでにアカウントをお持ちの方は",
            loginLink: "ログイン",
            metadata: {
                title: "新規登録 | SHIJON",
                description: "アカウントを作成してガチャを楽しもう！"
            },
            form: {
                lastName: "姓",
                firstName: "名前",
                username: "ユーザー名",
                email: "メールアドレス",
                password: "パスワード",
                confirmPassword: "パスワード（確認用）",
                passwordHint: "パスワードは8文字以上で入力してください",
                submit: "登録する",
                submitting: "登録中...",
                placeholders: {
                    lastName: "姓を入力",
                    firstName: "名を入力",
                    username: "ユーザー名を入力",
                    email: "メールアドレスを入力"
                },
                terms: {
                    termsOfService: "利用規約",
                    and: "および",
                    privacyPolicy: "プライバシーポリシー",
                    agree: "に同意する"
                },
                errors: {
                    passwordMismatch: "パスワードが一致しません",
                    passwordLength: "パスワードは8文字以上で入力してください",
                    termsRequired: "利用規約とプライバシーポリシーに同意する必要があります"
                }
            },
            success: "アカウントを作成しました！ログインしてください。",
            error: "アカウントの作成に失敗しました。もう一度お試しください。"
        },
        gacha: {
            header: {
                reviews: "{count}件のレビュー",
                share: "シェアする",
                likes: "いいね",
                dislikes: "よくないね",
            },
            details: {
                tabs: {
                    details: "商品詳細",
                    cards: "収録カード"
                },
                sections: {
                    description: "商品説明"
                }
            },
            cards: {
                cardNumber: "カード {number}",
                remaining: "残り{stock}個"
            },
            card: {
                remaining: "残り{count}個",
                remaining: "残り: {count}個",
                out_of_stock: "在庫なし",
                pricePerTry: "1回 ¥{price}",
            },
            purchase: {
                options: {
                    trial: "お試し",
                    once: "1回引く",
                    tenTimes: "10回引く",
                    hundredTimes: "100回引く",
                    free: "無料",
                    discount: {
                        ten: "10%お得！",
                        twenty: "20%お得！"
                    }
                },
                details: {
                    content: {
                        title: "商品内容",
                        description: "ポケモンカード1枚（ランダム）"
                    },
                    rarity: {
                        title: "レア度",
                        description: "SR: 5%, HR: 1%, UR: 0.1%"
                    },
                    period: {
                        title: "販売期間",
                        description: "2024年1月1日まで"
                    },
                    notice: {
                        title: "注意事項",
                        description: "購入後のキャンセル・返品はできません"
                    }
                },
                category: {
                    limited: "ポケモン 限定"
                },
                product: {
                    title: "ポケモンカード スペシャルガチャ",
                    description: "ポケモンカードの限定ガチャです。レアカードやホロカードなど、貴重なカードを手に入れるチャンス！1回の購入で1枚のカードが当たります。"
                },
                button: {
                    pull: "ガチャを引く",
                    processing: "処理中...",
                    buy: "購入する"
                },
            },
            success: {
                title: "ガチャ成功！",
                description: "獲得したアイテム"
            },
            error: {
                pull: {
                    title: "ガチャエラー",
                    description: "ガチャの実行中にエラーが発生しました"
                },
                insufficient: {
                    balance: {
                        title: "残高不足",
                        description: "コインが不足しています"
                    }
                },
                fetch: {
                    title: "ガチャの取得に失敗しました",
                },
                not_found: "ガチャが見つかりませんでした"
            },
            result: {
                title: "ガチャ結果",
                multi_draw: "10連ガチャ",
                oneDraw: "単発ガチャ",
                congratulations: "おめでとうございます！",
                summary: "獲得アイテム一覧",
                outOfStock: "ガチャアイテムの在庫がありません",
                retryError: "エラーが発生しました。もう一度お試しください。",
                next: "次へ",
                complete: "結果を確認する"
            }
        },
        header: {
            logo: {
                alt: "SHIJON ロゴ"
            },
            points: {
                magic: "M",
                coin: "C",
                add: "コインを追加"
            },
            notifications: {
                title: "通知",
                newNotification: "新しい通知があります"
            },
            userMenu: {
                username: "ユーザー名",
                profile: "プロフィール",
                settings: "設定",
                adminDashboard: "管理者ダッシュボード",
                logout: "ログアウト"
            },
            auth: {
                login: "ログイン",
                signup: "新規登録"
            }
        },
        sidebar: {
            sections: {
                menu: "メニュー",
                featured: "特集"
            },
            menu: {
                originalGacha: "オリジナルガチャ",
                gachaRanking: "ガチャランキング",
                exchange: "交換所"
            },
            featured: {
                newGacha: "新着ガチャ",
                trending: "人気急上昇",
                recommended: "おすすめ",
                limited: "限定ガチャ"
            }
        },
        home: {
            news: {
                title: "ニュース & お知らせ",
                viewMore: "もっと見る"
            },
            featured: {
                title: "注目のカード",
                viewMore: "もっと見る"
            },
            popular: {
                title: "人気のガチャ",
                viewMore: "もっと見る"
            },
            cards: {
                premiumPack: "プレミアムカードパック",
                rareGacha: "レアカードガチャ",
                remaining: "残り{count}個",
                new: "NEW",
                price: "{price}円",
                pricePerTry: "1回 {price}円"
            }
        },
        payment: {
            paypay: {
                description: "PayPayでお支払い",
                instruction: "PayPayアプリを起動して支払いを完了してください",
                pay: "PayPayで{amount}円を支払う"
            },
            dialog: {
                title: "お支払い方法の選択",
                description: "コインをチャージします。以下のお支払い方法からお選びください。",
                close: "閉じる",
                methods: {
                    bank: {
                        name: "銀行振込",
                        description: "指定口座にお振込みいただきます"
                    },
                    "google-pay": {
                        name: "Google Pay",
                        description: "Google Payで簡単決済"
                    },
                    "credit-card": {
                        name: "クレジットカード",
                        description: "主要なクレジットカードに対応"
                    },
                    "apple-pay": {
                        name: "Apple Pay",
                        description: "Apple Payで簡単決済"
                    },
                    paypay: {
                        name: "PayPay",
                        description: "PayPayアプリでお支払い"
                    },
                    convenience: {
                        name: "コンビニ払い",
                        description: "全国のコンビニでお支払い可能"
                    }
                }
            },
            details: {
                creditCard: {
                    title: "クレジットカード情報の入力",
                    cardNumber: "カード番号",
                    expiryDate: "有効期限",
                    cvc: "セキュリティコード"
                },
                bank: {
                    title: "銀行口座情報の入力",
                    accountHolder: "口座名義人",
                    bankName: "銀行名",
                    branchName: "支店名",
                    accountNumber: "口座番号"
                },
                submit: "お支払いを確定する",
                processing: "処理中...",
                pay: "¥{amount}を支払う",
            },
            complete: {
                processing: "処理中...",
                wait: "しばらくお待ちください",
                success: {
                    title: "お支払いが完了しました",
                    description: "コインの追加が完了しました"
                },
                failed: {
                    title: "お支払いに失敗しました",
                    description: "もう一度お試しください"
                },
                balance: "現在の残高: {balance}コイン",
                return: "チャージページに戻る",
                tryAgain: "もう一度試す"
            },
            table: {
                search: {
                    placeholder: "支払いIDまたはユーザーIDで検索",
                    status: {
                        label: "ステータス",
                        all: "すべて",
                        completed: "完了",
                        pending: "処理中",
                        refunded: "返金済み"
                    },
                    dateRange: {
                        label: "期間",
                        all: "すべての期間",
                        today: "今日",
                        week: "過去7日間",
                        month: "過去30日間"
                    },
                    results: "{count}件の結果"
                },
                headers: {
                    id: "ID",
                    userId: "ユーザーID",
                    amount: "金額",
                    status: "ステータス",
                    date: "日付",
                    actions: "アクション"
                },
                refund: {
                    button: "返金",
                    confirmTitle: "返金処理の確認",
                    confirmDescription: "{userId}様への{amount}円の返金を実行しますか？",
                    cancel: "キャンセル",
                    confirm: "返金する",
                    success: "返金処理が完了しました",
                    error: "返金処理に失敗しました"
                }
            }
        },
        charge: {
            title: "コインチャージ",
            description: "クレジットカードでコインをチャージします。チャージ金額を選択してください。",
            currentBalance: "現在の保有コイン：",
            coin: "コイン",
            coins: "コイン",
            legal: "特定商取引法に基づく表記",
            button: {
                charge: "¥{price}をチャージ",
                processing: "処理中..."
            },
            success: {
                title: "チャージ完了",
                description: "{coins}コインをチャージしました"
            },
            error: {
                title: "エラー",
                description: "チャージに失敗しました"
            }
        },
        gachaForm: {
            title: "ガチャを作成",
            titleEdit: "ガチャを編集",
            toast: {
                createSuccess: "ガチャを作成しました",
                updateSuccess: "ガチャを更新しました",
                error: "エラーが発生しました",
                genericError: "予期せぬエラーが発生しました",
                validationError: "入力内容に誤りがあります"
            },
            oneTimeFree: {
                label: "初回無料を有効にする"
            },
            languageSettings: {
                ja: "日本語設定",
                en: "英語設定",
                zh: "中国語設定"
            },
            commonSettings: {
                title: "共通設定",
                pityThreshold: {
                    label: "天井値",
                    placeholder: "天井値を入力してください",
                    help: "天井値に達するまでは、ガチャで最高レア度のカードが出現しないことを保証いたします"
                },
                type: {
                    label: "ガチャ種類",
                    placeholder: "ガチャ種類を選択",
                    normal: "通常",
                    limited: "限定",
                    special: "スペシャル"
                },
                price: {
                    label: "価格（コイン）",
                    placeholder: "価格を入力"
                },
                period: {
                    label: "期間（日数）",
                    placeholder: "期間を入力"
                },
                dailyLimit: {
                    label: "1日あたりの制限回数",
                    placeholder: "制限回数を入力",
                    unlimited: "制限なし"
                },
                category: {
                    label: "カテゴリー",
                    placeholder: "カテゴリーを選択",
                    noCategories: "カテゴリーがありません",
                },
            },
            itemSettings: {
                title: "アイテム設定",
                name: "アイテム名",
                rarity: {
                    label: "レア度",
                    normal: "ノーマル",
                    rare: "レア",
                    superRare: "スーパーレア"
                },
                exchangeRate: "交換レート",
                stock: "在庫数",
                probability: "確率 (%)",
                addItem: "アイテムを追加",
                lastOnePrize: "ラストワン賞",
            },
            thumbnail: {
                title: "サムネイル",
                recommendedSize: "推奨サイズ: 1200×900ピクセル",
                maxFileSize: "最大ファイルサイズ: 10MB",
                supportedFormats: "対応形式: JPG, PNG"
            },
            status: {
                active: "公開する"
            },
            submit: "作成する",
            update: "更新する",
            validation: {
                categoryRequired: "カテゴリーを選択してください",
                thumbnailRequired: "サムネイル画像を選択してください"
            }
        },
        upload: {
            clickToUpload: "クリックしてアップロード",
            dragAndDrop: "またはファイルをドロップ"
        },
        admin: {
            gachaTable: {
                headers: {
                    thumbnail: "サムネイル",
                    name: "名前",
                    type: "種類",
                    price: "価格",
                    period: "期間",
                    status: "ステータス",
                    actions: "操作"
                },
                types: {
                    normal: "通常",
                    limited: "限定",
                    special: "スペシャル"
                },
                status: {
                    active: "公開中",
                    inactive: "非公開"
                },
                period: {
                    unlimited: "無期限",
                    days: "{days}日間"
                },
                points: "コイン",
                edit: "編集",
                delete: "削除",
                confirmDelete: "このガチャを削除してもよろしいですか？",
                deleteSuccess: "ガチャを削除しました",
                deleteSuccessDescription: "ガチャが正常に削除されました",
                deleteError: "ガチャの削除に失敗しました",
                deleteErrorDescription: "ガチャの削除中にエラーが発生しました",
                deleteConfirmDescription: "この操作は元に戻せません。ガチャとそれに関連するすべてのデータが完全に削除されます。"
            },
            payments: {
                title: "支払い管理",
                search: {
                    placeholder: "ユーザーIDで検索",
                    button: "検索",
                    clear: "クリア",
                    results: "検索結果"
                },
                details: {
                    paymentId: "支払いID",
                    userId: "ユーザーID",
                    date: "日付",
                    amount: "¥{amount}",
                    status: {
                        completed: "完了",
                        processing: "処理中"
                    }
                }
            },
            users: {
                title: "ユーザー一覧",
                loading: "読み込み中...",
                table: {
                    username: "ユーザー名",
                    email: "メールアドレス",
                    status: "ステータス",
                    points: "コイン残高",
                    registrationDate: "登録日",
                    actions: "操作",
                    details: "詳細"
                },
                status: {
                    active: "有効",
                    suspended: "停止中",
                    banned: "利用禁止"
                },
                search: {
                    placeholder: "ユーザー名またはメールアドレスで検索",
                },
                messages: {
                    fetchError: "ユーザー一覧の取得に失敗しました",
                    statusUpdateSuccess: "ステータスを更新しました",
                    statusUpdateError: "ステータスの更新に失敗しました",
                    fetchDetailsError: "ユーザー情報の取得に失敗しました",
                    noUsersFound: "該当するユーザーが見つかりませんでした",
                    searchError: "検索中にエラーが発生しました",
                },
                details: {
                    title: "ユーザー詳細",
                    basicInfo: "基本情報",
                    username: "ユーザー名",
                    email: "メールアドレス",
                    status: "ステータス",
                    coinBalance: "コイン残高",
                    name: "氏名",
                    phone: "電話番号",
                    transactions: "取引履歴",
                    payments: "支払い履歴",
                    transactionDate: "取引日",
                    paymentDate: "支払日",
                    type: "種類",
                    method: "支払方法",
                    description: "説明",
                    amount: "金額"
                }
            },
            support: {
                inquiries: {
                    title: "お問い合わせ一覧",
                    table: {
                        id: "ID",
                        user: "ユーザー",
                        userId: "ユーザーID",
                        subject: "件名",
                        status: "ステータス",
                        date: "日付",
                        actions: "アクション"
                    },
                    filter: {
                        status: "ステータスでフィルター",
                        all: "すべて表示"
                    },
                    status: {
                        pending: "未対応",
                        inProgress: "対応中",
                        resolved: "対応済み"
                    },
                    noData: "お問い合わせがありません",
                    noDataDescription: "現在表示できるお問い合わせはありません",
                    messages: {
                        loadError: "問い合わせの取得に失敗しました",
                        updateSuccess: "ステータスを更新しました",
                        updateError: "ステータスの更新に失敗しました"
                    }
                }
            }
        },
        reports: {
            title: "レポート",
            types: {
                sales: "売上データ",
                users: "ユーザーデータ",
                inventory: "在庫データ"
            },
            chart: {
                sales: "売上",
                users: "ユーザー数",
                inventory: "在庫数",
                active: "アクティブ",
                suspended: "利用停止",
                banned: "利用禁止"
            },
            export: {
                csv: "CSV出力",
                pdf: "PDF出力",
                success: "{format}ファイルをダウンロードしました",
                error: "エクスポートに失敗しました"
            },
            error: "エラー: {message}"
        },
        rankings: {
            title: "ユーザーランキング",
            tabs: {
                daily: "デイリー",
                weekly: "ウィークリー",
                monthly: "マンスリー"
            },
            topUser: {
                title: "トップユーザー",
                dailyRanking: "デイリーランキング 1位",
                pointsEarned: "獲得ポイント",
                points: "{points} pt"
            },
            table: {
                rank: "順位",
                user: "ユーザー",
                points: "ポイント",
                suffix: "位",
                userAlt: "{user}のアバター"
            }
        },
        privacy: {
            title: "プライバシーポリシー",
            established: "制定日: {date}",
            lastUpdated: "最終更新日: {date}",
            sections: {
                introduction: {
                    title: "はじめに",
                    content: "本プライバシーポリシーは、合同会社OMOTENASHI（以下「当社」といいます。）が取得する個人情報の取り扱いについて定めています。当社は、本プライバシーポリシー、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）、関係法令及びガイドライン等を遵守し、個人情報を適切に取り扱います。"
                },
                collection: {
                    title: "1. 個人情報の取得について",
                    content: "当社は、当社サービスの提供その他事業活動に際し、当社サービスの利用者（以下「ユーザー」といいます。）その他の個人から、適正に個人情報を取得いたします。\n\n個人情報の取得にあたっては、利用目的を明確にし、偽りその他不正の手段により個人情報を取得することはいたしません。\n\n当社は、当社提供のサイト「SIJOHN」（以下「本サイト」といいます。）を利用するお客様の以下に定める個人に関する情報を、次条の目的に従い取得し利用する場合があります。\n\n本サイトの利用等に関する情報\nお客様から提供される氏名、メールアドレス、電話番号、住所その他のお客様に関する情報\n本サイトの利用、購買、その他本サイトを通じてお客様が行った取引の遂行のための情報及び当該取引に関する情報（お支払いに利用した決済方法等を含みます）\n商品代金支払いのための情報\nお支払いのために利用したクレジットカード情報、銀行口座情報、電子マネーに関する情報その他の決済に関する情報"
                },
                purpose: {
                    title: "2. 個人情報の利用について",
                    content: "ユーザーの個人情報は次に定める目的を達成するために必要な範囲で利用し、当該目的以外で利用することはいたしません。当社は、以下に定められていない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行います。\n\n当社サービスを提供するため\n本人確認又は本人確認のための認証サービスを利用するため\n当社サービスにおけるお客様へのお支払い又はお客様への利用料金の請求のため\nご意見、ご要望、お問い合わせなどに対応するため\n当社サービスのアンケート、キャンペーン、イベントなどを実施するため\n当社又は当社に広告を委託した第三者の広告を実施するため\n当社サービスの利用状況、実施施策などマーケティング調査、分析のため\n当社サービスの品質改善、サービス向上のための調査、分析のため\n当社の新サービス、新機能を企画するための調査、分析のため\n当社サービスに関する当社の利用規約やポリシー、関係法令等に違反する行為やトラブルへの対応、法的請求のため\n当社サービスのメンテナンス、重要なお知らせ等の必要に応じた連絡のため\n当社サービス又はネットワーク等のシステム障害、不具合、事故発生時の調査及び対応のため"
                },
                security: {
                    title: "3. 個人情報の安全管理について",
                    content: "当社は、個人情報を正確かつ最新の内容に保つよう努めるとともに、合理的かつ適切な安全管理措置を講じるよう努めます。"
                },
                outsourcing: {
                    title: "4. 個人情報の委託・共同利用について",
                    content: "当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部又は一部を第三者に委託する場合があります。この場合、当社は、委託先としての適格性を十分審査するとともに、契約にあたって守秘義務に関する事項等を定め、委託先に対する必要かつ適切な監督を行います。 また、当社は、個人情報の全部又は一部を個人情報保護法の定めに基づいて共同利用することがあります。"
                },
                provision: {
                    title: "5. 個人情報の第三者提供について",
                    content: "当社は、次に定める場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供いたしません。\n\n人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合\n公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合\n国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合\n業務を円滑に遂行するため、利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合\n合併その他の事由による事業の承継に伴って個人情報が提供される場合\n個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的及び当該個人情報の管理について責任を有する者の氏名又は名称について、あらかじめ本人に通知し、又は本人が容易に知り得る状態に置いた場合\nその他法令で認められる場合"
                },
                disclosure: {
                    title: "6. 個人情報の開示・訂正等について",
                    content: "当社は、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示をいたします。但し、開示することにより次のいずれかに該当する場合は、その全部又は一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。\n\nご本人又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合\n当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合\nその他法令に違反することとなる場合\n\n個人情報の内容に誤りがあり、ご本人から訂正、追加又は削除の請求がある場合、調査の上、速やかにこれらの請求に対応いたします。 当社の個人情報の取り扱いにつきまして、上記の請求、お問い合わせ等がございましたら、後記のお問い合わせ先までご連絡くださいますようお願い申し上げます。その際、ご本人であることが確認できない場合には、上記の請求には応じられません。"
                },
                stopUse: {
                    title: "7. 個人情報の利用停止等",
                    content: "当社は、ご本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由又は不正の手段により取得されたものであるという理由により、その利用の停止又は消去を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行い、その旨ご本人に通知します。但し、個人情報の利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ご本人の権利利益を保護するために必要なこれに代わるべき措置をとることができる場合は当該代替策を講じます。"
                },
                changes: {
                    title: "8. プライバシーポリシーの変更",
                    content: "本方針のプライバシーポリシーは改定する場合があります。プライバシーポリシーを改定した場合には、その旨を当社サイト上で告知しますので、定期的にご確認下さいますようお願いいたします。 変更後の本方針については、当社が別途定める場合を除いて、当サイトに掲載した時から効力を生じるものとします。"
                },
                contact: {
                    title: "9. お問い合わせ先",
                    content: "当社の個人情報の取扱いに関するお問い合わせは下記までご連絡ください。\n\n合同会社OMOTENASHI"
                }
            },
            footer: {
                conclusion: "2024年10月04日制定"
            }
        },
        legal: {
            title: "特定商取引法に基づく表記",
            sections: {
                seller: {
                    title: "販売事業者",
                    content: "合同会社 OMOTENASHI"
                },
                representative: {
                    title: "運営責任者",
                    content: "岩村 雄二"
                },
                address: {
                    title: "所在地",
                    content: "〒104-0061 東京都中央区銀座1-12-4 N&E BLD.7階"
                },
                phone: {
                    title: "電話番号",
                    content: "03-4222-3343"
                },
                email: {
                    title: "メールアドレス",
                    content: "info@gachagame.com"
                },
                url: {
                    title: "URL",
                    content: "https://oripa-shijon.com/"
                },
                businessDetails: {
                    title: "事業内容",
                    content: "オンラインサービス"
                },
                price: {
                    title: "販売価格",
                    content: "アプリ内で提供するデジタルカード、ガチャ利用、その他アイテムの販売価格は、それぞれ個別に設定されています。詳細はアプリ内の各商品ページをご確認ください。"
                },
                additionalFees: {
                    title: "商品以外の必要料金",
                    content: "商品代金以外に、インターネット接続料金などの通信費用がかかります。"
                },
                paymentMethods: {
                    title: "代金の支払時期及び方法",
                    content: "アプリ内通貨の購入時、またはクレジットカード、デビットカード、プリペイドカード、キャリア決済、その他電子マネー決済時に即時決済されます。"
                },
                paymentTiming: {
                    title: "支払時期",
                    content: "商品購入時に即時決済"
                },
                delivery: {
                    title: "商品の提供時期",
                    content: "決済完了後、即時にアプリ内でデジタルカード、ガチャ結果、アイテムが提供されます。"
                },
                returns: {
                    title: "返品・キャンセルに関する特約",
                    content: "デジタルコンテンツの特性上、購入後の返品・キャンセルはできません。ただし、アプリの不具合によりデジタルカード、ガチャ結果、アイテムが正常に提供されなかった場合は、お問い合わせフォームよりご連絡ください。"
                },
                security: {
                    title: "セキュリティ",
                    content: "SSLを使用し、通信内容を暗号化しています。"
                },
                other: {
                    title: "その他",
                    content: "アプリ内通貨には有効期限があります。\n未成年者のアプリ内課金については、保護者の同意が必要です。\n有料ガチャには、提供割合が設定されています。提供割合は、アプリ内のガチャ詳細画面で確認できます。\nカードの組み合わせにより、ゲーム内で有利になることがあります。\nカードには、レアリティが設定されています。\n期間限定カードや、期間限定ガチャがあります。"
                }
            },
            footer: {
                update: "本ページの記載内容は、随時更新される可能性があります。",
                contact: "最新の情報については、お問い合わせフォームよりお問い合わせください。"
            }
        },
        forgotPassword: {
            title: "パスワードをリセット",
            description: "メールアドレスを入力してください。パスワードリセットのリンクを送信します。",
            email: {
                label: "メールアドレス",
                placeholder: "メールアドレスを入力",
                invalid: "有効なメールアドレスを入力してください"
            },
            submit: {
                default: "リセットリンクを送信",
                loading: "送信中..."
            },
            toast: {
                success: {
                    title: "メールをご確認ください",
                    description: "アカウントが存在する場合、パスワードリセットの手順を送信しました。"
                },
                error: {
                    title: "エラー",
                    description: "エラーが発生しました。後でもう一度お試しください。"
                }
            }
        }
    },
    en: {
        common: {
            myPage: "My Page",
            settings: "Settings",
            menu: "Menu",
            add: "Add",
            delete: "Delete",
            save: "Save",
            cancel: "Cancel",
            edit: "Edit",
            search: "Search",
            loading: "Loading...",
            error: "Error",
            success: "Success",
            page: "Page",
            next: "Next",
            previous: "Previous",
            actions: {
                retry: "Retry",
                // ... other action translations
            }
        },
        share: {
            title: "Share via",
            instagram: {
                notAvailable: "Instagram sharing is not available directly. Please copy the link and share manually."
            }
        },
        forgotPassword: {
            title: "Reset Password",
            description: "Enter your email address and we'll send you a password reset link",
            email: {
              label: "Email",
              placeholder: "Enter your email",
              invalid: "Please enter a valid email address"
            },
            submit: {
              default: "Send Reset Link",
              loading: "Sending..."
            },
            toast: {
              success: {
                title: "Check your email",
                description: "If an account exists with this email, we've sent you password reset instructions."
              },
              error: {
                title: "Error",
                description: "Something went wrong. Please try again later."
              }
            }
          },
        resetPassword: {
            title: "Reset Password",
            description: "Enter your new password",
            form: {
              newPassword: "New Password",
              confirmPassword: "Confirm Password",
              submit: "Reset Password",
              submitting: "Resetting...",
            },
            toast: {
              error: {
                invalidToken: "Invalid reset token",
                failed: "Failed to reset password. Please try again."
              },
              success: "Your password has been reset successfully"
            }
          },
        navigation: {
            originalGacha: "Original Gacha",
            gachaRanking: "Gacha Ranking",
            exchange: "Exchange",
        },
        otp: {
            title: "Verify Authentication Code",
            description: "Enter the authentication code sent to {email}",
            label: "Authentication Code",
            placeholder: "Enter 6-digit code",
            verify: "Verify",
            verifying: "Verifying...",
            resend: "Resend Code",
            success: "Verification completed",
            resendSuccess: "Authentication code has been resent",
            errors: {
                invalidEmail: "Invalid email address",
                verification: "Verification failed",
                resend: "Failed to resend authentication code"
            }
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last Updated: {date}",
            established: "Established: {date}",
            sections: {
                introduction: {
                    title: "1. Introduction",
                    content: "These Terms of Service (hereinafter referred to as 'Terms') establish the terms and conditions for the use of services (hereinafter referred to as 'Service') provided by 合同会社 OMOTENASHI (hereinafter referred to as 'Company') on its website. All registered users (hereinafter referred to as 'Users') shall use this Service in accordance with these Terms."
                },
                registration: {
                    title: "2. User Registration",
                    content: "Those who wish to use this Service may register to use the Service by agreeing to these Terms and applying for registration in the manner prescribed by the Company, subject to the Company's approval."
                },
                accountManagement: {
                    title: "3. Management of User ID and Password",
                    content: "Users shall manage their Service user ID and password appropriately at their own responsibility. Users may not transfer, lend, or share their user ID and password with any third party under any circumstances. The Company shall consider any access and use of the Service through a combination of user ID and password matching the registered information as use by the user who registered that user ID."
                },
                prohibitedMatters: {
                    title: "4. Prohibited Actions",
                    content: `Users shall not engage in the following actions when using the Service:
      
      • Actions that violate laws or public order and morals
      • Actions related to criminal activities
      • Actions that destroy or interfere with the functionality of the Company's, other users', or third parties' servers or networks
      • Actions that may interfere with the operation of the Company's services
      • Actions that collect or accumulate personal information about other users
      • Actions to attempt or gain unauthorized access
      • Actions that impersonate other users
      • Actions that directly or indirectly benefit anti-social forces in relation to the Company's services
      • Any other actions that the Company deems inappropriate`
                },
                serviceStop: {
                    title: "5. Suspension of Service",
                    content: `The Company may suspend or interrupt all or part of the Service without prior notice to users if the Company determines that any of the following circumstances exist:
      
      • When performing maintenance or updates on computer systems related to the Service
      • When providing the Service becomes difficult due to force majeure such as earthquakes, lightning, fire, power outages, or natural disasters
      • When computers or communication lines stop due to accidents
      • When the Company otherwise determines that it is difficult to provide the Service
      
      The Company shall not be liable for any disadvantages or damages suffered by users or third parties due to the suspension or interruption of the Service.`
                },
                usageRestrictions: {
                    title: "6. Usage Restrictions and Cancellation",
                    content: `The Company may restrict the use of all or part of the Service or cancel user registration without prior notice if the user falls under any of the following:
      
      • When the user violates any provision of these Terms
      • When it is discovered that registration information contains false information
      • When there is a failure to fulfill payment obligations
      • When there is no response to communications from the Company for a certain period
      • When there has been no use of the Service for a certain period after the last use
      • When the Company otherwise determines that use of the Service is inappropriate
      
      The Company shall not be liable for any damages incurred by users due to actions taken by the Company based on this article.`
                },
                disclaimer: {
                    title: "7. Disclaimer and Limitation of Liability",
                    content: `The Company makes no express or implied warranties that the Service is free from factual or legal defects (including defects in safety, reliability, accuracy, completeness, validity, fitness for a particular purpose, security, errors or bugs, and infringement of rights).
      
      The Company shall not be liable for any damages incurred by users arising from the Service, except in cases of intentional or gross negligence by the Company. However, this disclaimer shall not apply if the contract between the Company and the user regarding the Service (including these Terms) constitutes a consumer contract under the Consumer Contract Act.`
                },
                serviceChanges: {
                    title: "8. Changes to Service Content",
                    content: "The Company may change, add, or discontinue the contents of the Service without prior notice to users, and users shall accept this."
                },
                termsChanges: {
                    title: "9. Changes to Terms",
                    content: "The Company may change these Terms at any time without notice to users when deemed necessary. If a user continues to use the Service after changes to these Terms, the user shall be deemed to have agreed to the changed Terms."
                },
                privacy: {
                    title: "10. Handling of Personal Information",
                    content: "The Company shall handle personal information obtained through the use of the Service in accordance with the Company's 'Privacy Policy'."
                },
                notifications: {
                    title: "11. Notifications and Communications",
                    content: "Notifications and communications between users and the Company shall be made in the manner prescribed by the Company. Unless users submit a notification of change in accordance with the method specified by the Company, the Company shall consider the currently registered contact information valid and send notifications or communications to that contact information, which shall be deemed to have reached the user at the time of transmission."
                },
                rightsTransfer: {
                    title: "12. Prohibition of Rights Transfer",
                    content: "Users may not transfer or provide as collateral their contractual status under the usage contract or their rights or obligations under these Terms to any third party without prior written consent from the Company."
                },
                governing: {
                    title: "13. Governing Law and Jurisdiction",
                    content: "These Terms shall be interpreted in accordance with the laws of Japan. The court having jurisdiction over the location of the Company's head office shall have exclusive jurisdiction for the first instance over any disputes related to the Service."
                }
            },
            footer: {
                conclusion: "End of Terms"
            }
        },
        notifications: {
            title: "Notifications",
            empty: "No notifications",
            markAsRead: "Mark as read",
            all: "All notifications",
            unread: "Unread notifications",
            sendSuccess: "Notification sent successfully",
            sendError: "Failed to send notification",
            loadError: "Failed to load notifications",
            markAsReadSuccess: "Marked as read",
            markAsReadError: "Failed to mark as read",
            form: {
                type: {
                    label: "Notification Type",
                    placeholder: "Select notification type",
                    options: {
                        app: "In-App Notification",
                        email: "Email Notification",
                        push: "Push Notification"
                    }
                },
                title: {
                    label: "Title",
                    placeholder: "Enter notification title"
                },
                content: {
                    label: "Content",
                    placeholder: "Enter notification content"
                },
                submit: "Send Notification"
            }
        },
        inventory: {
            status: {
                title: "Inventory Status",
                table: {
                    itemName: "Item Name",
                    quantity: "Quantity",
                    percentage: "Percentage",
                    threshold: "Alert Threshold (%)",
                    status: "Status"
                },
                status: {
                    low: "Low Stock",
                    normal: "Normal"
                },
                mobile: {
                    itemName: "Item Name:",
                    quantity: "Quantity:",
                    percentage: "Percentage:",
                    threshold: "Alert Threshold (%):",
                    status: "Status:"
                }
            }
        },
        securitySettings: {
            ipRestriction: {
                title: "IP Restriction",
                description: "Allow access only from specific IP addresses"
            },
            logMonitoring: {
                title: "Log Monitoring",
                description: "Enable security log monitoring"
            },
            alertEmail: {
                title: "Alert Notification Email",
                placeholder: "alert@example.com"
            },
            button: {
                save: "Save Settings",
                saving: "Saving..."
            },
            toast: {
                success: "Security settings updated successfully",
                error: "Failed to update settings"
            },
            error: "An error occurred: {error}"
        },
        settings: {
            languageSettings: "Language Settings",
            lineSettings: "LINE Settings",
            otherSettings: "Other Settings",
            ipRestriction: "IP Restriction",
            logMonitoring: "Log Monitoring",
            alertEmail: "Alert Email",
            other: {
                title: "Other Settings",
                links: {
                    faq: "FAQ",
                    terms: "Terms of Service",
                    privacy: "Privacy Policy",
                    legal: "Legal Information",
                },
                deleteAccount: {
                    button: "Delete Account",
                    confirmTitle: "Are you sure?",
                    confirmDescription: "This action cannot be undone. All your data will be permanently deleted.",
                    confirmButton: "Delete Account",
                    success: "Account deleted successfully",
                    error: "Failed to delete account",
                },
                logout: {
                    title: "Log Out",
                    success: "Successfully logged out",
                    error: "Failed to logout"
                }
            },
        },
        profile: {
            pageTitle: "My Page",
            tabs: {
                profile: "Profile",
                inventory: "Inventory",
                inviteCode: "Invite Code",
                pointHistory: "Point History",
                settings: "Settings",
            },
            form: {
                title: "Basic Information",
                fields: {
                    name: "Full Name",
                    postalCode: "Postal Code",
                    address: "Address",
                    phone: "Phone Number",
                },
                submit: "Save",
                success: "Profile updated successfully",
                error: "Failed to update profile",
                validation: {
                    nameRequired: "Please enter your name",
                    postalCodeRequired: "Please enter your postal code",
                    postalCodeFormat: "Please enter a valid postal code format",
                    addressRequired: "Please enter your address",
                    phoneRequired: "Please enter your phone number",
                    phoneFormat: "Please enter a valid phone number format"
                },
                placeholder: {
                    postalCode: "123-4567",
                    phone: "090-1234-5678"
                }
            },
            inventory: {
                filter: {
                    all: "All",
                    rare: "Rare",
                    super_rare: "Super Rare",
                    normal: "Normal"
                },
                refresh: "Refresh",
                exchangeSuccess: "Successfully exchanged for points",
                exchangeError: "Failed to exchange for points",
                exchangePoints: "Exchange for Points",
                shipSuccess: "Shipping request submitted",
                shipSuccessDescription: "We've started processing your shipping request",
                shipError: "Failed to submit shipping request",
                shipErrorDescription: "An error occurred while processing your shipping request. Please try again later.",
                card: {
                    name: "Pokemon Card #{number}",
                    rarity: "Rarity",
                    unselected: "Unselected"
                },
                actions: {
                    exchange: "Exchange",
                    ship: "Request Shipping"
                },
                status: {
                    exchanged: "Exchanged",
                    shipped: "Shipped",
                    shipping: "Processing",
                    available: "Available"
                },
                noItems: "No items found",
                noItemsDescription: "Try your luck with gacha to get some items!",
                settings: {
                    title: "Inventory Management Settings",
                    globalThreshold: "Global Alert Threshold (%)",
                    notificationMethod: "Notification Method",
                    realTimeUpdates: "Real-time Updates",
                    saveSettings: "Save Settings",
                    saveSuccess: "Settings saved successfully",
                    saveError: "Failed to save settings",
                    notifications: {
                        line: "LINE",
                        email: "Email",
                        slack: "Slack"
                    }
                },
                obtained: "Obtained on",
                exchange: {
                    confirmTitle: "Confirm Exchange",
                    confirmDescription: "Do you want to exchange {itemName} for points?",
                    confirm: "Exchange"
                },
                ship: {
                    confirmTitle: "Confirm Shipping Request",
                    confirmDescription: "Would you like to request shipping for {itemName}?",
                    confirm: "Request Shipping"
                },
            },
            invite: {
                title: "Invite Code",
                copy: {
                    success: "Copied to clipboard",
                    error: "Failed to copy"
                },
                share: {
                    x: "Share on X",
                    facebook: "Share on Facebook",
                    message: "Join SHIJON! Invite code: {code}"
                },
                stats: {
                    total: "Total Invites",
                    successful: "Successful Invites",
                    pending: "Pending Invites"
                }
            },
            inviteForm: {
                title: "Enter Invite Code",
                label: "Invite Code",
                placeholder: "Enter your invite code",
                submit: "Submit",
                messages: {
                    required: "Please enter an invite code",
                    success: "Invite code submitted successfully",
                    error: "An error occurred"
                }
            },
            points: {
                balance: {
                    title: "Points Balance",
                    unit: "pts",
                    purchase: "Purchase Points",
                    purchaseTitle: "Purchase Points",
                    enterAmount: "Enter amount of points to purchase",
                    confirmPurchase: "Confirm Purchase",
                    invalidAmount: "Please enter a valid amount",
                    purchaseSuccess: "Purchase Successful",
                    purchaseSuccessDetail: "Successfully purchased {amount} points",
                    purchaseError: "Failed to process purchase"
                },
                history: {
                    title: "Points History",
                    table: {
                        date: "Date",
                        description: "Description",
                        points: "Points",
                        balance: "Balance"
                    },
                    noTransactions: "No transaction history",
                    items: {
                        purchase: "Points Purchase",
                        gacha: "Gacha Pull",
                        exchange: "Item Exchange",
                        bonus: "Bonus Points",
                        refund: "Refund",
                        campaign: "Campaign Reward",
                        admin: "Admin Grant",
                        unknown: "Other"
                    }
                }
            },
            stats: {
                total: "Total Invites",
                successful: "Successful Invites",
                pending: "Pending Invites"
            }
        },
        line: {
            title: "LINE Integration",
            notifications: "LINE Notifications",
            connect: "Connect LINE Account",
            disconnect: "Disconnect LINE Account",
            notificationsDescription: "Receive notifications via LINE",
            copyCode: "Copy Connection Code",
            codeCopied: "Code Copied!",
            connectionStatus: {
                connected: "Connected",
                disconnected: "Not Connected",
            },
            messages: {
                connectSuccess: "LINE account connected successfully",
                connectError: "Failed to connect LINE account",
                disconnectSuccess: "LINE account disconnected successfully",
                disconnectError: "Failed to disconnect LINE account",
                notificationSuccess: "LINE notification settings updated",
                notificationError: "Failed to update LINE notification settings",
                loginUrlError: "Failed to fetch LINE login URL",
                codeCopied: "Connection code copied to clipboard",
                copyError: "Failed to copy code to clipboard",
            },
            connectionInstructions: {
                title: "Follow these steps to connect your LINE account:",
                step1: "Click the 'Connect' button above to add our official LINE account",
                step2: "Click the 'Copy Connection Code' button below to copy your unique code",
                step3: "Send the copied code to our LINE official account to complete the connection"
              },
        },
        form: {
            required: "Required",
            enterName: "Please enter your name",
            enterEmail: "Please enter your email",
            enterValidEmail: "Please enter a valid email address",
            enterTitle: "Please enter a title",
            enterContent: "Please enter content",
            selectCategory: "Please select a category",
            agreeToPrivacyPolicy: "You must agree to the privacy policy",
        },
        product: {
            title: "All Gacha",
            sort: {
                recommended: "Recommended",
                newest: "Newest",
                priceAsc: "Price: Low to High",
                priceDesc: "Price: High to Low",
            },
            category: {
                all: "All",
                new: "New",
                popular: "Popular",
                sale: "On Sale",
                other: "Other"
            },
            rating: {
                fiveStars: "★ 5.0 and up",
                fourStars: "★ 4.0 and up",
                threeStars: "★ 3.0 and up",
            },
            filter: {
                title: "Filters",
                category: "Category",
                price: "Price",
                rating: "Rating",
                priceMin: "Min",
                priceMax: "Max",
            },
            loadMore: "Load More"
        },
        footer: {
            company: {
                description: "Delivering the best online gacha experience."
            },
            links: {
                title: "Links",
                about: "About Us",
                terms: "Terms of Service",
                privacy: "Privacy Policy",
                contact: "Contact Us"
            },
            social: {
                title: "Follow Us",
                twitter: "Twitter",
                instagram: "Instagram"
            },
            copyright: "© 2025 合同会社 OMOTENASHI. All rights reserved."
        },
        messages: {
            confirmDelete: "Are you sure you want to delete?",
            confirmDeleteAccount: "Are you sure you want to delete your account?",
            deleteAccountWarning: "This action cannot be undone. All your data will be permanently deleted.",
            settingsSaved: "Settings saved successfully",
            settingsError: "Failed to save settings",
            categoryAdded: "Category added successfully",
            categoryDeleted: "Category deleted successfully",
        },
        about: {
            title: "About Us",
            companyName: "Company Name",
            companyNameValue: "OMOTENASHI",
            established: "Established",
            establishedValue: "April 1, 2023",
            representative: "Representative",
            representativeValue: "Yuji Ikemura",
            address: "Location",
            addressValue: "1-12-4 Ginza, Chuo-ku, Tokyo 104-0061, Japan",
            business: "Business",
            businessValue: "Online game planning and development\nSales of trading cards\nProduction of digital content",
            phone: "Phone",
            phoneValue: "+81 3-4222-3343",
            email: "Email",
            emailValue: "info@oripa-shijon.com",
            url: "Website",
            urlValue: "https://oripa-shijon.com/",
            copyright: "© 2023-2025 OMOTENASHI. All rights reserved."
        },
        contact: {
            pageTitle: "Contact Us",
            form: {
                placeholders: {
                    name: "Your Name",
                    email: "Email Address",
                    category: "Select a Category",
                    message: "Your Message"
                },
                categories: {
                    general: "General Inquiry",
                    technical: "Technical Issue",
                    billing: "Billing Question",
                    other: "Other"
                },
                privacy: {
                    link: "Privacy Policy",
                    agreement: "I agree to the"
                },
                submit: "Submit",
                notice: "Please note that response times may vary depending on the nature of your inquiry.",
                success: "Your inquiry has been submitted successfully",
                error: "Failed to submit inquiry. Please try again",
                submitting: "Submitting...",
                validation: {
                    nameRequired: "Name is required",
                    emailInvalid: "Please enter a valid email",
                    categoryRequired: "Please select a category",
                    messageRequired: "Message is required",
                    privacyRequired: "You must agree to the privacy policy"
                }
            }
        },
        login: {
            title: "Login",
            description: "Login to your account to enjoy gacha!",
            error: "Login Error",
            success: {
                title: "Login Successful",
                description: "You have successfully logged in"
            },
            form: {
                email: {
                    label: "Email",
                    placeholder: "example@example.com",
                    error: "Please enter a valid email address"
                },
                password: {
                    label: "Password",
                    error: "Password must be at least 8 characters"
                },
                submit: "Login",
                submitting: "Logging in..."
            },
            forgotPassword: "Forgot password?",
            noAccount: "Don't have an account?",
            signUp: "Sign up"
        },
        signup: {
            title: "Sign Up",
            description: "Create an account and enjoy gacha!",
            haveAccount: "Already have an account?",
            loginLink: "Login",
            metadata: {
                title: "Sign Up | SHIJON",
                description: "Create an account and enjoy gacha!"
            },
            form: {
                lastName: "Last Name",
                firstName: "First Name",
                username: "Username",
                email: "Email Address",
                password: "Password",
                confirmPassword: "Confirm Password",
                passwordHint: "Password must be at least 8 characters long",
                submit: "Sign Up",
                submitting: "Signing up...",
                placeholders: {
                    lastName: "Enter your last name",
                    firstName: "Enter your first name",
                    username: "Choose a username",
                    email: "Enter your email address"
                },
                terms: {
                    termsOfService: "Terms of Service",
                    and: " and ",
                    privacyPolicy: "Privacy Policy",
                    agree: " - I agree to the terms"
                },
                errors: {
                    passwordMismatch: "Passwords do not match",
                    passwordLength: "Password must be at least 8 characters long",
                    termsRequired: "You must agree to the terms and conditions"
                }
            },
            success: "Account created successfully! Please log in.",
            error: "Failed to create account. Please try again."
        },
        gacha: {
            header: {
                reviews: "{count} reviews",
                share: "Share",
                likes: "Likes",
                dislikes: "Dislikes",
            },
            details: {
                tabs: {
                    details: "Product Details",
                    cards: "Included Cards"
                },
                sections: {
                    description: "Product Description"
                }
            },
            cards: {
                cardNumber: "Card {number}",
                remaining: "{stock} remaining"
            },
            card: {
                remaining: "{count} remaining",
                remaining: "Remaining: {count}",
                out_of_stock: "Out of stock",
                pricePerTry: "¥{price}/try",
            },
            purchase: {
                options: {
                    trial: "Try",
                    once: "Pull Once",
                    tenTimes: "Pull 10 Times",
                    hundredTimes: "Pull 100 Times",
                    free: "FREE",
                    discount: {
                        ten: "10% OFF!",
                        twenty: "20% OFF!"
                    }
                },
                details: {
                    content: {
                        title: "Content",
                        description: "1 Random Pokemon Card"
                    },
                    rarity: {
                        title: "Rarity",
                        description: "SR: 5%, HR: 1%, UR: 0.1%"
                    },
                    period: {
                        title: "Sale Period",
                        description: "Until January 1, 2024"
                    },
                    notice: {
                        title: "Notice",
                        description: "No cancellations or refunds after purchase"
                    }
                },
                category: {
                    limited: "Pokemon Limited"
                },
                product: {
                    title: "Pokemon Card Special Gacha",
                    description: "This is a limited Pokemon card gacha. Get a chance to obtain rare and holo cards! One card per pull."
                },
                button: {
                    pull: "Pull Once",
                    buy: "Purchase"
                },
            },
            success: {
                title: "Gacha Success",
                description: "Obtained Items",
                processing: "Processing...",
            },
            error: {
                fetch: {
                    title: "Failed to fetch gacha",
                },
                not_found: "Gacha not found",
                pull: {
                    title: "Gacha Error",
                    description: "An error occurred while pulling gacha"
                },
                insufficient: {
                    balance: {
                        title: "Insufficient Balance",
                        description: "Not enough points"
                    }
                }
            },
            result: {
                title: "Gacha Result",
                congratulations: "Congratulations!",
                drawAgain: "Draw Again?",
                oneDraw: "Single Draw",
                tenDraws: "10 Draws",
                discount: "10% OFF!",
                returnToList: "Return to Gacha List",
                summary: "Items Obtained",
                multi_draw: "10 Draws Result",
                cardInfo: {
                    ultraRare: "Ultra Rare",
                    id: "ID",
                    grade: "Grade"
                }
            }
        },
        header: {
            logo: {
                alt: "SHIJON Logo"
            },
            points: {
                magic: "M",
                coin: "C",
                add: "Add points"
            },
            notifications: {
                title: "Notifications",
                newNotification: "New notification"
            },
            userMenu: {
                username: "Username",
                profile: "Profile",
                settings: "Settings",
                logout: "Logout",
                adminDashboard: "Admin Dashboard"
            },
            auth: {
                login: "Login",
                signup: "Sign Up"
            }
        },
        sidebar: {
            sections: {
                menu: "Menu",
                featured: "Featured"
            },
            menu: {
                originalGacha: "Original Gacha",
                gachaRanking: "Gacha Ranking",
                exchange: "Exchange"
            },
            featured: {
                newGacha: "New Gacha",
                trending: "Trending",
                recommended: "Recommended",
                limited: "Limited Gacha"
            }
        },
        home: {
            news: {
                title: "News & Blog",
                viewMore: "View More"
            },
            featured: {
                title: "Featured Cards",
                viewMore: "View More"
            },
            popular: {
                title: "Popular Gacha",
                viewMore: "View More"
            },
            cards: {
                premiumPack: "Premium Card Pack",
                rareGacha: "Rare Card Gacha",
                remaining: "{count} remaining",
                new: "NEW",
                price: "¥{price}",
                pricePerTry: "¥{price} per try"
            }
        },
        payment: {
            paypay: {
                description: "Pay with PayPay",
                instruction: "Please open your PayPay app to complete the payment",
                pay: "Pay ¥{amount} with PayPay"
            },
            dialog: {
                title: "Select Payment Method",
                description: "Choose a payment method to charge coins.",
                close: "Close",
                methods: {
                    bank: {
                        name: "Bank Transfer",
                        description: "Transfer to our designated account"
                    },
                    "google-pay": {
                        name: "Google Pay",
                        description: "Easy payment with Google Pay"
                    },
                    "credit-card": {
                        name: "Credit Card",
                        description: "Supports major credit cards"
                    },
                    "apple-pay": {
                        name: "Apple Pay",
                        description: "Easy payment with Apple Pay"
                    },
                    paypay: {
                        name: "PayPay",
                        description: "Pay with PayPay app"
                    },
                    convenience: {
                        name: "Convenience Store Payment",
                        description: "Available at convenience stores nationwide"
                    }
                }
            },
            details: {
                creditCard: {
                    title: "Enter Credit Card Details",
                    cardNumber: "Card Number",
                    expiryDate: "Expiry Date",
                    cvc: "CVC"
                },
                bank: {
                    title: "Enter Bank Details",
                    accountHolder: "Account Holder Name",
                    bankName: "Bank Name",
                    branchName: "Branch Name",
                    accountNumber: "Account Number"
                },
                submit: "Confirm Payment",
                processing: "Processing...",
                pay: "Pay ¥{amount}",
            },
            complete: {
                processing: "Processing...",
                wait: "Please wait a moment",
                success: {
                    title: "Payment Successful",
                    description: "Your coins have been added to your account"
                },
                failed: {
                    title: "Payment Failed",
                    description: "Please try again"
                },
                balance: "Current Balance: {balance} coins",
                return: "Return to Charge Page",
                tryAgain: "Try Again"
            },
            table: {
                search: {
                    placeholder: "Search by Payment ID or User ID",
                    status: {
                        label: "Status",
                        all: "All",
                        completed: "Completed",
                        pending: "Pending",
                        refunded: "Refunded"
                    },
                    dateRange: {
                        label: "Period",
                        all: "All time",
                        today: "Today",
                        week: "Last 7 days",
                        month: "Last 30 days"
                    },
                    results: "{count} results"
                },
                headers: {
                    id: "ID",
                    userId: "User ID",
                    amount: "Amount",
                    status: "Status",
                    date: "Date",
                    actions: "Actions"
                },
                refund: {
                    button: "Refund",
                    confirmTitle: "Confirm Refund",
                    confirmDescription: "Are you sure you want to refund ¥{amount} to user {userId}?",
                    cancel: "Cancel",
                    confirm: "Refund",
                    success: "Refund processed successfully",
                    error: "Failed to process refund"
                }
            }
        },
        charge: {
            title: "Credit Card Charge",
            description: "Charge coins with your credit card. Please select the amount to charge.",
            currentBalance: "Current Balance:",
            coin: "coin",
            coins: "coins",
            legal: "Transaction Law Information",
            button: {
                charge: "¥{price}",
                processing: "Processing..."
            },
            success: {
                title: "Charge Complete",
                description: "Successfully charged {coins} coins"
            },
            error: {
                title: "Error",
                description: "Failed to charge coins"
            }
        },
        gachaForm: {
            title: "Gacha Settings",
            oneTimeFree: {
                label: "Enable One-Time Free Pull"
            },
            toast: {
                createSuccess: "Gacha created successfully",
                updateSuccess: "Gacha updated successfully",
                error: "An error occurred",
                genericError: "An unexpected error occurred",
                validationError: "Please check your input"
            },
            languageSettings: {
                ja: "Japanese Settings",
                en: "English Settings",
                zh: "Chinese Settings"
            },
            commonSettings: {
                title: "Common Settings",
                pityThreshold: {
                    label: "Pity Threshold",
                    placeholder: "Enter pity threshold",
                    help: "Guarantees a rarity E item after this many pulls"
                },
                type: {
                    label: "Gacha Type",
                    placeholder: "Select gacha type",
                    normal: "Normal",
                    limited: "Limited",
                    special: "Special"
                },
                price: {
                    label: "Price (Points)",
                    placeholder: "Enter price"
                },
                period: {
                    label: "Period (Days)",
                    placeholder: "Enter period"
                },
                dailyLimit: {
                    label: "Daily Pull Limit",
                    placeholder: "Enter limit",
                    unlimited: "No Limit"
                },
                category: {
                    label: "Category",
                    placeholder: "Select category",
                    noCategories: "No categories available",
                },
            },
            itemSettings: {
                title: "Item Settings",
                name: "Item Name",
                rarity: {
                    label: "Rarity",
                    normal: "Normal",
                    rare: "Rare",
                    superRare: "Super Rare"
                },
                exchangeRate: "Exchange Rate",
                stock: "Stock",
                probability: "Probability (%)",
                addItem: "Add Item",
                lastOnePrize: "Last One Prize",
            },
            thumbnail: {
                title: "Thumbnail",
                recommendedSize: "Recommended size: 1200x900px",
                maxFileSize: "Maximum file size: 10MB",
                supportedFormats: "Supported formats: JPG, PNG"
            },
            status: {
                active: "Active"
            },
            submit: "Save",
            validation: {
                categoryRequired: "Please select a category",
                thumbnailRequired: "Please select a thumbnail image"
            }
        },
        upload: {
            clickToUpload: "Click to upload",
            dragAndDrop: "or drag and drop"
        },
        admin: {
            gachaTable: {
                headers: {
                    thumbnail: "Thumbnail",
                    name: "Name",
                    type: "Type",
                    price: "Price",
                    period: "Period",
                    status: "Status",
                    actions: "Actions"
                },
                types: {
                    normal: "Normal",
                    limited: "Limited",
                    special: "Special"
                },
                status: {
                    active: "Active",
                    inactive: "Inactive"
                },
                period: {
                    unlimited: "Unlimited",
                    days: "{days} days"
                },
                points: "points",
                edit: "Edit",
                delete: "Delete",
                confirmDelete: "Are you sure you want to delete this gacha?",
                deleteSuccess: "Gacha deleted",
                deleteSuccessDescription: "The gacha has been successfully deleted",
                deleteError: "Failed to delete gacha",
                deleteErrorDescription: "An error occurred while deleting the gacha",
                deleteConfirmDescription: "This action cannot be undone. This will permanently delete the gacha and all its related data."
            },
            payments: {
                title: "Payment Management",
                search: {
                    placeholder: "Search by User ID",
                    button: "Search",
                    clear: "Clear",
                    results: "Search Results"
                },
                details: {
                    paymentId: "Payment ID",
                    userId: "User ID",
                    date: "Date",
                    amount: "¥{amount}",
                    status: {
                        completed: "Completed",
                        processing: "Processing"
                    }
                }
            },
            users: {
                title: "User List",
                loading: "Loading...",
                table: {
                    username: "Username",
                    email: "Email",
                    status: "Status",
                    points: "Points Balance",
                    registrationDate: "Registration Date",
                    actions: "Actions",
                    details: "Details"
                },
                status: {
                    active: "Active",
                    suspended: "Suspended",
                    banned: "Banned"
                },
                search: {
                    placeholder: "Search by username or email",
                },
                messages: {
                    fetchError: "Failed to fetch user list",
                    statusUpdateSuccess: "Status updated successfully",
                    statusUpdateError: "Failed to update status",
                    fetchDetailsError: "Failed to fetch user details",
                    noUsersFound: "No users found",
                    searchError: "An error occurred while searching",
                },
                details: {
                    title: "User Details",
                    basicInfo: "Basic Information",
                    username: "Username",
                    email: "Email",
                    status: "Status",
                    coinBalance: "Coin Balance",
                    name: "Name",
                    phone: "Phone",
                    transactions: "Transactions",
                    payments: "Payments",
                    transactionDate: "Transaction Date",
                    paymentDate: "Payment Date",
                    type: "Type",
                    method: "Payment Method",
                    description: "Description",
                    amount: "Amount"
                },
            },
            support: {
                inquiries: {
                    title: "Inquiries",
                    table: {
                        id: "ID",
                        user: "User",
                        userId: "User ID",
                        subject: "Subject",
                        status: "Status",
                        date: "Date",
                        actions: "Actions"
                    },
                    filter: {
                        status: "Filter by status",
                        all: "Show all"
                    },
                    status: {
                        pending: "Pending",
                        inProgress: "In Progress",
                        resolved: "Resolved"
                    },
                    noData: "No inquiries found",
                    noDataDescription: "There are no inquiries to display",
                    messages: {
                        loadError: "Failed to load inquiries",
                        updateSuccess: "Status updated successfully",
                        updateError: "Failed to update status"
                    }
                }
            }
        },
        reports: {
            title: "Reports",
            types: {
                sales: "Sales Data",
                users: "User Data",
                inventory: "Inventory Data"
            },
            chart: {
                sales: "Sales",
                users: "Users",
                inventory: "Inventory",
                active: "Active",
                suspended: "Suspended",
                banned: "Banned"
            },
            export: {
                csv: "Export CSV",
                pdf: "Export PDF",
                success: "{format} file downloaded successfully",
                error: "Export failed"
            },
            error: "Error: {message}"
        },
        rankings: {
            title: "User Rankings",
            tabs: {
                daily: "Daily",
                weekly: "Weekly",
                monthly: "Monthly"
            },
            topUser: {
                title: "Top User",
                dailyRanking: "Daily Ranking #1",
                pointsEarned: "Points Earned",
                points: "{points} pt"
            },
            table: {
                rank: "Rank",
                user: "User",
                points: "Points",
                suffix: "",
                userAlt: "{user}'s avatar"
            }
        },
        privacy: {
            title: "Privacy Policy",
            established: "Established: {date}",
            lastUpdated: "Last Updated: {date}",
            sections: {
                introduction: {
                    title: "1. Introduction",
                    content: "SHIJON (hereinafter referred to as 'Company') establishes this Privacy Policy (hereinafter referred to as 'Policy') regarding the handling of user's personal information in the service provided on this website (hereinafter referred to as 'Service')."
                },
                collection: {
                    title: "2. Collection of Personal Information",
                    content: "The Company may ask for personal information such as name, date of birth, address, phone number, email address, bank account number, and credit card number when users register for the Service. We may also collect information including personal information from our partners (including information providers, advertisers, and ad delivery destinations, hereinafter referred to as 'Partners') regarding transaction records and payment information between users and partners."
                },
                purpose: {
                    title: "3. Purpose of Collecting and Using Personal Information",
                    content: `The Company collects and uses personal information for the following purposes:
      
      • To provide and operate the Company's services
      • To respond to inquiries from users (including identity verification)
      • To verify and warn users in case of violations or potential violations of the terms of service
      • To allow users to view, modify, delete their registration information and confirm usage status
      • To bill users for paid services
      • For purposes incidental to the above purposes`
                },
                sharing: {
                    title: "4. Sharing of Personal Information",
                    content: `The Company will not provide personal information to third parties without the user's prior consent, except in the following cases and cases permitted by the Personal Information Protection Act and other laws and regulations:
      
      • When necessary to protect the life, body, or property of a person, and it is difficult to obtain the consent of the person
      • When especially necessary to improve public health or promote the sound growth of children, and it is difficult to obtain the consent of the person
      • When it is necessary to cooperate with a national agency, local government, or person commissioned by them to execute affairs prescribed by laws and regulations, and obtaining the consent of the person may impede the execution of such affairs`
                },
                disclosure: {
                    title: "5. Disclosure of Personal Information",
                    content: `The Company will disclose personal information to the person without delay when requested. However, we may not disclose all or part of the information if disclosure falls under any of the following cases, and we will notify without delay when deciding not to disclose:
      
      • When there is a risk of harming the life, body, property, or other rights and interests of the person or a third party
      • When there is a risk of significantly hindering the proper execution of the Company's business
      • When it would violate other laws and regulations`
                },
                correction: {
                    title: "6. Correction and Deletion of Personal Information",
                    content: `Users may request the Company to correct, add, or delete their personal information (hereinafter referred to as 'Correction, etc.') through procedures specified by the Company if their personal information held by the Company is incorrect.`
                },
                stopUse: {
                    title: "7. Suspension of Use of Personal Information",
                    content: `When requested by a person to suspend or delete (hereinafter referred to as 'Suspension of Use, etc.') their personal information on the grounds that it is being handled beyond the scope of the purpose of use or that it was obtained by fraudulent means, the Company will conduct necessary investigation without delay.`
                },
                changes: {
                    title: "8. Changes to Privacy Policy",
                    content: `The contents of this Policy may be changed without notice to users, except for matters stipulated by laws and other provisions of this Policy.`
                },
                contact: {
                    title: "9. Contact Information",
                    content: `For inquiries regarding this Policy, please contact:
      
      Address: 〒104-0061 東京都中央区銀座1-12-4 N&E BLD.7階
      Company Name: 合同会社 OMOTENASHI
      Department: Customer Support
      Email: privacy@gachagame.com`
                }
            },
            footer: {
                conclusion: "End of Policy"
            }
        },
        legal: {
            title: "Commercial Transaction Act Disclosures",
            sections: {
                seller: {
                    title: "Seller",
                    content: "合同会社 OMOTENASHI"
                },
                representative: {
                    title: "Representative",
                    content: "岩村 雄二"
                },
                address: {
                    title: "Address",
                    content: "〒104-0061\n東京都中央区銀座1-12-4 N&E BLD.7階"
                },
                phone: {
                    title: "Phone",
                    content: "03-4222-3343"
                },
                email: {
                    title: "Email",
                    content: "info@gachagame.com"
                },
                url: {
                    title: "URL",
                    content: "https://oripa-shijon.com/"
                },
                businessDetails: {
                    title: "事業内容",
                    content: "オンラインサービス"
                },
                price: {
                    title: "商品の販売価格",
                    content: "各商品ページに記載しております。"
                },
                additionalFees: {
                    title: "商品以外の必要料金",
                    content: "消費税"
                },
                paymentMethods: {
                    title: "支払方法",
                    content: "クレジットカード決済、キャリア決済、その他当社が定める決済方法"
                },
                paymentTiming: {
                    title: "支払期間",
                    content: "商品購入時"
                },
                delivery: {
                    title: "商品の引渡し時期",
                    content: "商品購入完了後、即時にデジタルコンテンツを提供いたします。"
                },
                returns: {
                    title: "返品・キャンセルに関する特約",
                    content: "デジタルコンテンツの特性上、購入後の返品・キャンセルはお受けできません。ただし、当社の責めに帰すべき事由により、デジタルコンテンツが提供されない場合は、お問い合わせフォームよりご連絡ください。"
                },
                security: {
                    title: "セキュリティ",
                    content: "SSLを使用し、通信内容を暗号化しています。"
                },
                other: {
                    title: "その他",
                    content: "アプリ内通貨には有効期限があります。\n未成年者のアプリ内課金については、保護者の同意が必要です。\n有料ガチャには、提供割合が設定されています。提供割合は、アプリ内のガチャ詳細画面で確認できます。\nカードの組み合わせにより、ゲーム内で有利になることがあります。\nカードには、レアリティが設定されています。\n期間限定カードや、期間限定ガチャがあります。"
                }
            },
            footer: {
                update: "本ページの記載内容は、随時更新される可能性があります。",
                contact: "最新の情報については、お問い合わせフォームよりお問い合わせください。"
            }
        },
        forgotPassword: {
            title: "Reset Password",
            description: "Enter your email address and we'll send you a password reset link",
            email: {
                label: "Email",
                placeholder: "Enter your email",
                invalid: "Please enter a valid email address"
            },
            submit: {
                default: "Send Reset Link",
                loading: "Sending..."
            },
            toast: {
                success: {
                    title: "Check your email",
                    description: "If an account exists with this email, we've sent you password reset instructions."
                },
                error: {
                    title: "Error",
                    description: "Something went wrong. Please try again later."
                }
            }
        }
    },
    zh: {
        common: {
            myPage: "个人主页",
            settings: "设置",
            menu: "菜单",
            add: "添加",
            delete: "删除",
            save: "保存",
            cancel: "取消",
            edit: "编辑",
            search: "搜索",
            loading: "加载中...",
            error: "错误",
            success: "成功",
            page: "页面",
            next: "下一页",
            previous: "上一页",
            actions: {
                retry: "重试",
                // ... other action translations
            }
        },
        share: {
            title: "分享方式",
            instagram: {
                notAvailable: "无法直接分享到Instagram。请复制链接后手动分享。"
            }
        },
        forgotPassword: {
            title: "重置密码",
            description: "请输入您的电子邮箱，我们将向您发送密码重置链接",
            email: {
              label: "电子邮箱",
              placeholder: "请输入电子邮箱",
              invalid: "请输入有效的电子邮箱地址"
            },
            submit: {
              default: "发送重置链接",
              loading: "发送中..."
            },
            toast: {
              success: {
                title: "请查收邮件",
                description: "如果该邮箱存在账号，我们已向您发送密码重置说明。"
              },
              error: {
                title: "错误",
                description: "发生错误，请稍后重试。"
              }
            }
          },
        resetPassword: {
            title: "重置密码",
            description: "请输入新密码",
            form: {
              newPassword: "新密码",
              confirmPassword: "确认密码",
              submit: "重置密码",
              submitting: "重置中...",
            },
            toast: {
              error: {
                invalidToken: "无效的重置令牌",
                failed: "重置密码失败。请重试。"
              },
              success: "密码重置成功"
            }
          },
        otp: {
            title: "验证认证码",
            description: "请输入发送至{email}的认证码",
            label: "认证码",
            placeholder: "输入6位数字验证码",
            verify: "验证",
            verifying: "验证中...",
            resend: "重新发送验证码",
            success: "验证成功",
            resendSuccess: "验证码已重新发送",
            errors: {
                invalidEmail: "邮箱地址无效",
                verification: "验证失败",
                resend: "重新发送验证码失败"
            }
        },
        terms: {
            title: "服务条款",
            lastUpdated: "最后更新：{date}",
            established: "制定日期：{date}",
            sections: {
                introduction: {
                    title: "1. 简介",
                    content: "本服务条款（以下简称\"条款\"）规定了SHIJON（以下简称\"公司\"）在其网站上提供的服务（以下简称\"服务\"）的使用条款和条件。所有注册用户（以下简称\"用户\"）在使用本服务时必须遵守这些条款。"
                },
                registration: {
                    title: "2. 用户注册",
                    content: "希望使用本服务的人员可以通过同意这些条款并按照公司规定的方式申请注册，经公司批准后使用本服务。"
                },
                accountManagement: {
                    title: "3. 用户ID和密码管理",
                    content: "用户应自行负责适当管理其服务用户ID和密码。在任何情况下，用户都不得将其用户ID和密码转让、出借或与任何第三方共享。公司将视通过与注册信息相匹配的用户ID和密码组合访问和使用服务的行为为该注册用户ID的用户本人使用。"
                },
                prohibitedMatters: {
                    title: "4. 禁止行为",
                    content: `用户在使用本服务时不得从事以下行为：
      
      • 违反法律或公共秩序道德的行为
      • 与犯罪活动相关的行为
      • 破坏或干扰公司、其他用户或第三方服务器或网络功能的行为
      • 可能干扰公司服务运营的行为
      • 收集或累积其他用户个人信息的行为
      • 试图或获取未经授权访问的行为
      • 冒充其他用户的行为
      • 与公司服务相关的直接或间接有利于反社会势力的行为
      • 公司认为不适当的任何其他行为`
                },
                serviceStop: {
                    title: "5. 服务中断",
                    content: `如果公司确定存在以下任何情况，可以在不事先通知用户的情况下暂停或中断全部或部分服务：
      
      • 进行与服务相关的计算机系统维护或更新时
      • 由于地震、雷电、火灾、停电或自然灾害等不可抗力导致提供服务变得困难时
      • 由于事故导致计算机或通信线路停止时
      • 公司认为难以提供服务的其他情况
      
      对于因服务暂停或中断而给用户或第三方造成的任何不利或损害，公司不承担责任。`
                },
                usageRestrictions: {
                    title: "6. 使用限制和注销",
                    content: `如果用户属于以下任何情况，公司可以在不事先通知的情况下限制使用全部或部分服务或注销用户注册：
      
      • 用户违反本条款的任何规定时
      • 发现注册信息包含虚假信息时
      • 未履行付款义务时
      • 在一定期间内对公司的联系没有回应时
      • 最后一次使用后在一定期间内未使用服务时
      • 公司认为使用服务不适当的其他情况
      
      对于公司基于本条采取行动而给用户造成的任何损害，公司不承担责任。`
                },
                disclaimer: {
                    title: "7. 免责声明和责任限制",
                    content: `公司不对服务在事实上或法律上没有缺陷（包括安全性、可靠性、准确性、完整性、有效性、特定用途适用性、安全性、错误或漏洞以及权利侵犯等缺陷）作出明示或暗示的保证。
      
      除公司故意或重大过失的情况外，公司不对用户因使用服务而遭受的任何损害承担责任。但是，如果公司与用户之间关于服务的合同（包括本条款）构成消费者合同法下的消费者合同，则本免责声明不适用。`
                },
                serviceChanges: {
                    title: "8. 服务内容变更",
                    content: "公司可以在不事先通知用户的情况下变更、添加或中止服务内容，用户应接受此类变更。"
                },
                termsChanges: {
                    title: "9. 条款变更",
                    content: "公司可以在认为必要时随时更改这些条款，无需通知用户。如果用户在这些条款更改后继续使用服务，则视为同意更改后的条款。"
                },
                privacy: {
                    title: "10. 个人信息处理",
                    content: "公司将根据公司的\"隐私政策\"处理通过使用服务获得的个人信息。"
                },
                notifications: {
                    title: "11. 通知和联系",
                    content: "用户与公司之间的通知和联系应按照公司规定的方式进行。除非用户按照公司指定的方式提交变更通知，否则公司将视当前注册的联系信息为有效，并向该联系信息发送通知或联系，这些通知或联系在发送时即视为已送达用户。"
                },
                rightsTransfer: {
                    title: "12. 权利转让禁止",
                    content: "未经公司事先书面同意，用户不得将其在使用合同下的合同地位或本条款下的权利或义务转让或作为担保提供给任何第三方。"
                },
                governing: {
                    title: "13. 适用法律和管辖权",
                    content: "本条款应根据日本法律解释。与本服务相关的任何争议，公司所在地的法院具有第一审专属管辖权。"
                }
            },
            footer: {
                conclusion: "条款结束"
            }
        },
        navigation: {
            originalGacha: "原创扭蛋",
            gachaRanking: "扭蛋排行",
            exchange: "兑换中心",
        },
        notifications: {
            title: "通知列表",
            empty: "暂无通知",
            markAsRead: "标记为已读",
            all: "所有通知",
            unread: "未读通知",
            sendSuccess: "通知发送成功",
            sendError: "通知发送失败",
            loadError: "通知加载失败",
            markAsReadSuccess: "已标记为已读",
            markAsReadError: "标记已读失败",
            form: {
                type: {
                    label: "通知类型",
                    placeholder: "选择通知类型",
                    options: {
                        app: "应用内通知",
                        email: "邮件通知",
                        push: "推送通知"
                    }
                },
                title: {
                    label: "标题",
                    placeholder: "输入通知标题"
                },
                content: {
                    label: "内容",
                    placeholder: "输入通知内容"
                },
                submit: "发送通知"
            }
        },
        securitySettings: {
            ipRestriction: {
                title: "IP限制",
                description: "仅允许特定IP地址访问"
            },
            logMonitoring: {
                title: "日志监控",
                description: "启用安全日志监控"
            },
            alertEmail: {
                title: "警报通知邮箱",
                placeholder: "alert@example.com"
            },
            button: {
                save: "保存设置",
                saving: "保存中..."
            },
            toast: {
                success: "安全设置更新成功",
                error: "设置更新失败"
            },
            error: "发生错误：{error}"
        },
        inventory: {
            status: {
                title: "库存状态",
                table: {
                    itemName: "商品名称",
                    quantity: "库存数量",
                    percentage: "库存百分比",
                    threshold: "警报阈值 (%)",
                    status: "状态"
                },
                status: {
                    low: "库存不足",
                    normal: "正常"
                },
                mobile: {
                    itemName: "商品名称:",
                    quantity: "库存数量:",
                    percentage: "库存百分比:",
                    threshold: "警报阈值 (%):",
                    status: "状态:"
                }
            }
        },
        settings: {
            languageSettings: "语言设置",
            lineSettings: "LINE设置",
            otherSettings: "其他设置",
            ipRestriction: "IP限制",
            logMonitoring: "日志监控",
            alertEmail: "警报邮件",
            other: {
                title: "其他设置",
                links: {
                    faq: "常见问题",
                    terms: "服务条款",
                    privacy: "隐私政策",
                    legal: "法律信息",
                },
                deleteAccount: {
                    button: "删除账号",
                    confirmTitle: "确定要删除账号吗？",
                    confirmDescription: "此操作无法撤销。所有数据将被永久删除。",
                    confirmButton: "删除",
                    success: "账号已成功删除",
                    error: "删除账号失败",
                },
                logout: {
                    title: "退出登录",
                    success: "已成功退出登录",
                    error: "退出登录失败"
                }
            },
        },
        profile: {
            pageTitle: "个人主页",
            tabs: {
                profile: "个人资料",
                inventory: "物品列表",
                inviteCode: "邀请码",
                pointHistory: "积分历史",
                settings: "设置",
            },
            form: {
                title: "基本信息",
                fields: {
                    name: "姓名",
                    postalCode: "邮政编码",
                    address: "地址",
                    phone: "电话号码",
                },
                submit: "保存",
                success: "个人资料更新成功",
                error: "个人资料更新失败",
                validation: {
                    nameRequired: "请输入姓名",
                    postalCodeRequired: "请输入邮政编码",
                    postalCodeFormat: "请输入正确的邮政编码格式",
                    addressRequired: "请输入地址",
                    phoneRequired: "请输入电话号码",
                    phoneFormat: "请输入正确的电话号码格式"
                },
                placeholder: {
                    postalCode: "123-4567",
                    phone: "090-1234-5678"
                }
            },
            inventory: {
                filter: {
                    all: "全部",
                    rare: "稀有",
                    super_rare: "超稀有",
                    normal: "普通"
                },
                refresh: "刷新",
                exchangeSuccess: "积分兑换成功",
                exchangeError: "积分兑换失败",
                exchangePoints: "兑换积分",
                shipSuccess: "发货请求已提交",
                shipSuccessDescription: "我们已开始处理您的发货请求",
                shipError: "发货请求提交失败",
                shipErrorDescription: "处理您的发货请求时发生错误，请稍后再试。",
                fetchError: "获取物品列表失败",
                card: {
                    name: "宝可梦卡片 #{number}",
                    rarity: "稀有度",
                    unselected: "未选择"
                },
                actions: {
                    exchange: "兑换",
                    ship: "申请发货"
                },
                status: {
                    exchanged: "已兑换",
                    shipped: "已发货",
                    shipping: "处理中",
                    available: "有货"
                },
                noItems: "暂无物品",
                noItemsDescription: "快来抽扭蛋获取物品吧！",
                settings: {
                    title: "库存管理设置",
                    globalThreshold: "全局警报阈值 (%)",
                    notificationMethod: "通知方式",
                    realTimeUpdates: "实时更新",
                    saveSettings: "保存设置",
                    saveSuccess: "设置保存成功",
                    saveError: "设置保存失败",
                    notifications: {
                        line: "LINE",
                        email: "邮件",
                        slack: "Slack"
                    }
                },
                obtained: "获得日期",
                exchange: {
                    confirmTitle: "确认兑换",
                    confirmDescription: "是否要将{itemName}兑换成积分？",
                    confirm: "兑换"
                },
                ship: {
                    confirmTitle: "确认发货请求",
                    confirmDescription: "是否要申请发送{itemName}？",
                    confirm: "申请发货"
                },
            },
            invite: {
                title: "邀请码",
                copy: {
                    success: "已复制",
                    error: "复制失败"
                },
                share: {
                    x: "分享到X",
                    facebook: "分享到Facebook",
                    message: "加入SHIJON！邀请码：{code}"
                },
                stats: {
                    total: "总邀请数",
                    successful: "成功邀请",
                    pending: "待处理邀请"
                }
            },
            inviteForm: {
                title: "输入邀请码",
                label: "邀请码",
                placeholder: "请输入邀请码",
                submit: "提交",
                messages: {
                    required: "请输入邀请码",
                    success: "邀请码提交成功",
                    error: "发生错误"
                }
            },
            points: {
                balance: {
                    title: "积分余额",
                    unit: "点",
                    purchase: "购买积分",
                    purchaseTitle: "购买积分",
                    enterAmount: "请输入要购买的积分数量",
                    confirmPurchase: "确认购买",
                    invalidAmount: "请输入有效的积分数量",
                    purchaseSuccess: "购买成功",
                    purchaseSuccessDetail: "已成功购买 {amount} 积分",
                    purchaseError: "购买处理失败"
                },
                history: {
                    title: "积分历史",
                    table: {
                        date: "日期",
                        description: "说明",
                        points: "积分",
                        balance: "余额"
                    },
                    noTransactions: "暂无交易记录",
                    items: {
                        purchase: "积分购买",
                        gacha: "扭蛋使用",
                        exchange: "物品兑换",
                        bonus: "奖励积分",
                        refund: "退款",
                        campaign: "活动奖励",
                        admin: "管理员授予",
                        unknown: "其他"
                    }
                }
            },
            stats: {
                total: "总邀请数",
                successful: "成功邀请",
                pending: "待处理邀请"
            }
        },
        line: {
            title: "LINE关联",
            notifications: "LINE通知",
            connect: "关联LINE账号",
            disconnect: "解除LINE关联",
            notificationsDescription: "通过LINE接收通知",
            copyCode: "复制关联码",
            codeCopied: "已复制！",
            connectionStatus: {
                connected: "已关联",
                disconnected: "未关联",
            },
            messages: {
                connectSuccess: "LINE账号关联成功",
                connectError: "LINE账号关联失败",
                disconnectSuccess: "已解除LINE关联",
                disconnectError: "解除LINE关联失败",
                notificationSuccess: "LINE通知设置已更新",
                notificationError: "LINE通知设置更新失败",
                loginUrlError: "获取LINE登录链接失败",
                codeCopied: "关联码已复制到剪贴板",
                copyError: "复制关联码失败",
            },
            connectionInstructions: {
                title: "请按照以下步骤关联您的LINE账号：",
                step1: "点击上方\"关联LINE账号\"按钮添加我们的官方LINE账号",
                step2: "点击下方\"复制关联码\"按钮复制您的专属关联码",
                step3: "将复制的关联码发送至我们的LINE官方账号完成关联"
              },
        },
        form: {
            required: "必填",
            enterName: "请输入姓名",
            enterEmail: "请输入邮箱",
            enterValidEmail: "请输入有效的邮箱地址",
            enterTitle: "请输入标题",
            enterContent: "请输入内容",
            selectCategory: "请选择类别",
            agreeToPrivacyPolicy: "必须同意隐私政策",
        },
        product: {
            title: "全部扭蛋",
            sort: {
                recommended: "推荐排序",
                newest: "最新",
                priceAsc: "价格从低到高",
                priceDesc: "价格从高到低",
            },
            category: {
                all: "全部",
                new: "新品",
                popular: "热门",
                sale: "特价",
                other: "其他"
            },
            rating: {
                fiveStars: "★ 5.0以上",
                fourStars: "★ 4.0以上",
                threeStars: "★ 3.0以上",
            },
            filter: {
                title: "筛选",
                category: "类别",
                price: "价格",
                rating: "评分",
                priceMin: "最低",
                priceMax: "最高",
            },
            loadMore: "加载更多"
        },
        footer: {
            company: {
                description: "为您提供最佳在线扭蛋体验。"
            },
            links: {
                title: "链接",
                about: "关于我们",
                terms: "服务条款",
                privacy: "隐私政策",
                contact: "联系我们"
            },
            social: {
                title: "关注我们",
                twitter: "Twitter",
                instagram: "Instagram"
            },
            copyright: "© 2025 合同会社 OMOTENASHI. 版权所有。"
        },
        messages: {
            confirmDelete: "确定要删除吗？",
            confirmDeleteAccount: "确定要注销账号吗？",
            deleteAccountWarning: "此操作无法撤销。所有数据将被永久删除。",
            settingsSaved: "设置保存成功",
            settingsError: "设置保存失败",
            categoryAdded: "类别添加成功",
            categoryDeleted: "类别删除成功",
        },
        about: {
            title: "关于我们",
            companyName: "公司名称",
            companyNameValue: "OMOTENASHI",
            established: "成立",
            establishedValue: "2023年4月1日",
            representative: "代表者",
            representativeValue: "岩村 雄二",
            address: "所在地",
            addressValue: "〒104-0061 東京都中央区銀座1-12-4 N&E BLD.7階",
            business: "事业内容",
            businessValue: "在线游戏策划与开发\n交易卡牌销售\n数字内容制作",
            phone: "电话号码",
            phoneValue: "+81 3-4222-3343",
            email: "电子邮箱",
            emailValue: "info@oripa-shijon.com",
            url: "网站",
            urlValue: "https://oripa-shijon.com/",
            copyright: "© 2023-2025 OMOTENASHI. 版权所有。"
        },
        contact: {
            pageTitle: "联系我们",
            form: {
                placeholders: {
                    name: "您的姓名",
                    email: "电子邮箱",
                    category: "请选择类别",
                    message: "留言内容"
                },
                categories: {
                    general: "一般咨询",
                    technical: "技术问题",
                    billing: "付款相关",
                    other: "其他"
                },
                privacy: {
                    link: "隐私政策",
                    agreement: "我同意"
                },
                success: "您的咨询已成功提交",
                error: "提交失败，请重试",
                submitting: "提交中...",
                validation: {
                    nameRequired: "请输入姓名",
                    emailInvalid: "请输入有效的电子邮箱",
                    categoryRequired: "请选择类别",
                    messageRequired: "请输入消息内容",
                    privacyRequired: "您必须同意隐私政策"
                }
            }
        },
        login: {
            title: "登录",
            description: "登录您的账户开始抽卡吧！",
            error: "登录错误",
            success: {
                title: "登录成功",
                description: "您已成功登录"
            },
            form: {
                email: {
                    label: "邮箱",
                    placeholder: "example@example.com",
                    error: "请输入有效的邮箱地址"
                },
                password: {
                    label: "密码",
                    error: "密码长度必须至少为8个字符"
                },
                submit: "登录",
                submitting: "登录中..."
            },
            forgotPassword: "忘记密码？",
            noAccount: "还没有账户？",
            signUp: "注册"
        },
        signup: {
            title: "注册",
            description: "创建账号开始抽卡吧！",
            haveAccount: "已有账号？",
            loginLink: "登录",
            metadata: {
                title: "注册 | SHIJON",
                description: "创建账号开始抽卡吧！"
            },
            form: {
                lastName: "姓",
                firstName: "名",
                username: "用户名",
                email: "电子邮箱",
                password: "密码",
                confirmPassword: "确认密码",
                passwordHint: "密码长度至少为8个字符",
                submit: "注册",
                submitting: "注册中...",
                placeholders: {
                    lastName: "请输入姓",
                    firstName: "请输入名",
                    username: "请输入用户名",
                    email: "请输入电子邮箱"
                },
                terms: {
                    termsOfService: "服务条款",
                    and: "和",
                    privacyPolicy: "隐私政策",
                    agree: "- 同意"
                },
                errors: {
                    passwordMismatch: "两次输入的密码不一致",
                    passwordLength: "密码长度至少为8个字符",
                    termsRequired: "请同意服务条款和隐私政策"
                }
            },
            success: "账号创建成功！请登录。",
            error: "账号创建失败，请重试。"
        },
        gacha: {
            header: {
                reviews: "{count}条评价",
                share: "分享",
                likes: "点赞数",
                dislikes: "不喜欢", 
            },
            details: {
                tabs: {
                    details: "商品详情",
                    cards: "收录卡片"
                },
                sections: {
                    description: "商品说明"
                }
            },
            card: {
                remaining: "剩余{count}个",
                out_of_stock: "缺货",
                pricePerTry: "¥{price}/次",
            },
            cards: {
                cardNumber: "卡片 {number}",
                remaining: "剩余{stock}个"
            },
            purchase: {
                options: {
                    trial: "试玩",
                    once: "抽1次",
                    tenTimes: "抽10次",
                    hundredTimes: "抽100次",
                    free: "免费",
                    discount: {
                        ten: "优惠10%！",
                        twenty: "优惠20%！"
                    }
                },
                details: {
                    content: {
                        title: "商品内容",
                        description: "宝可梦卡片1张（随机）"
                    },
                    rarity: {
                        title: "稀有度",
                        description: "SR: 5%, HR: 1%, UR: 0.1%"
                    },
                    period: {
                        title: "销售期间",
                        description: "截至2024年1月1日"
                    },
                    notice: {
                        title: "注意事项",
                        description: "购买后不可取消或退款"
                    }
                },
                category: {
                    limited: "宝可梦限定"
                },
                product: {
                    title: "宝可梦卡片特别扭蛋",
                    description: "这是限定的宝可梦卡片扭蛋。有机会获得稀有卡片和闪卡！每次抽取可获得一张卡片。"
                },
                button: {
                    processing: "处理中...",
                    pull: "抽一次",
                    buy: "购买"
                },
            },
            success: {
                title: "扭蛋成功",
                description: "获得物品"
            },
            error: {
                pull: {
                    title: "扭蛋错误",
                    description: "抽取扭蛋时发生错误"
                },
                insufficient: {
                    balance: {
                        title: "余额不足",
                        description: "点数不足"
                    }
                },
                fetch: {
                    title: "获取扭蛋失败",
                },
                not_found: "未找到扭蛋"
            },
            result: {
                title: "扭蛋结果",
                congratulations: "恭喜！",
                drawAgain: "再抽一次？",
                oneDraw: "单次抽卡",
                tenDraws: "10 Draws",
                discount: "10% OFF!",
                returnToList: "返回扭蛋列表",
                summary: "获得物品列表",
                multi_draw: "10连抽结果",
                cardInfo: {
                    ultraRare: "超稀有",
                    id: "ID",
                    grade: "等级"
                }
            }
        },
        header: {
            logo: {
                alt: "SHIJON 标志"
            },
            points: {
                magic: "M",
                coin: "C",
                add: "添加点数"
            },
            notifications: {
                title: "通知",
                newNotification: "新通知"
            },
            userMenu: {
                username: "用户名",
                profile: "个人资料",
                settings: "设置",
                logout: "退出登录",
                adminDashboard: "管理员面板"
            },
            auth: {
                login: "登录",
                signup: "注册"
            }
        },
        sidebar: {
            sections: {
                menu: "菜单",
                featured: "特色"
            },
            menu: {
                originalGacha: "原创扭蛋",
                gachaRanking: "扭蛋排行",
                exchange: "兑换中心"
            },
            featured: {
                newGacha: "新品扭蛋",
                trending: "热门上升",
                recommended: "推荐",
                limited: "限定扭蛋"
            }
        },
        home: {
            news: {
                title: "新闻 & 博客",
                viewMore: "查看更多"
            },
            featured: {
                title: "精选卡牌",
                viewMore: "查看更多"
            },
            popular: {
                title: "热门扭蛋",
                viewMore: "查看更多"
            },
            cards: {
                premiumPack: "高级卡包",
                rareGacha: "稀有卡片扭蛋",
                remaining: "剩余{count}个",
                new: "新品",
                price: "¥{price}",
                pricePerTry: "每次¥{price}"
            }
        },
        payment: {
            paypay: {
                description: "使用PayPay支付",
                instruction: "请打开PayPay应用完成支付",
                pay: "使用PayPay支付{amount}日元"
            },
            dialog: {
                title: "入金方法の選択",
                description: "コインのチャージをします。以下の入金方法からお選びください。",
                close: "閉じる",
                methods: {
                    bank: {
                        name: "銀行振込",
                        description: "当社指定の口座に振込"
                    },
                    "google-pay": {
                        name: "Google Pay",
                        description: "Google Payで簡単決済"
                    },
                    "credit-card": {
                        name: "クレジットカード",
                        description: "主要なクレジットカードに対応"
                    },
                    "apple-pay": {
                        name: "Apple Pay",
                        description: "Apple Payで簡単決済"
                    },
                    paypay: {
                        name: "PayPay",
                        description: "PayPayアプリで支払い"
                    },
                    convenience: {
                        name: "コンビニ払い",
                        description: "全国のコンビニで支払い可能"
                    }
                }
            },
            details: {
                creditCard: {
                    title: "クレジットカード情報の入力",
                    cardNumber: "カード番号",
                    expiryDate: "有効期限",
                    cvc: "セキュリティコード"
                },
                dialog: {
                    title: "选择支付方式",
                    description: "请选择以下支付方式充值金币。",
                    close: "关闭",
                    methods: {
                        bank: {
                            name: "银行转账",
                            description: "转账至指定账户"
                        },
                        "google-pay": {
                            name: "Google Pay",
                            description: "使用Google Pay快捷支付"
                        },
                        "credit-card": {
                            name: "信用卡",
                            description: "支持主流信用卡"
                        },
                        "apple-pay": {
                            name: "Apple Pay",
                            description: "使用Apple Pay快捷支付"
                        },
                        paypay: {
                            name: "PayPay",
                            description: "使用PayPay应用支付"
                        },
                        convenience: {
                            name: "便利店支付",
                            description: "支持全国各大便利店支付"
                        }
                    }
                },
                details: {
                    creditCard: {
                        title: "Enter Credit Card Details",
                        cardNumber: "Card Number",
                        expiryDate: "Expiry Date",
                        cvc: "CVC"
                    },
                    bank: {
                        title: "Enter Bank Details",
                        accountHolder: "Account Holder Name",
                        bankName: "Bank Name",
                        branchName: "Branch Name",
                        accountNumber: "Account Number"
                    },
                    submit: "Confirm Payment",
                    processing: "处理中...",
                    pay: "支付¥{amount}",
                },
                complete: {
                    processing: "Processing...",
                    wait: "Please wait a moment",
                    success: {
                    },
                    details: {
                        creditCard: {
                            title: "输入信用卡详情",
                            cardNumber: "卡号",
                            expiryDate: "有效期",
                            cvc: "安全码"
                        },
                        bank: {
                            title: "输入银行账户详情",
                            accountHolder: "账户持有人",
                            bankName: "银行名称",
                            branchName: "支行名称",
                            accountNumber: "账号"
                        },
                        submit: "确认支付"
                    },
                    complete: {
                        processing: "处理中...",
                        wait: "请稍候",
                        success: {
                            title: "支付成功",
                            description: "金币已添加到您的账户"
                        },
                        failed: {
                            title: "支付失败",
                            description: "请重试"
                        },
                        balance: "当前余额：{balance}金币",
                        return: "返回充值页面",
                        tryAgain: "重试"
                    },
                    table: {
                        search: {
                            placeholder: "搜索支付ID或用户ID",
                            status: {
                                label: "状态",
                                all: "全部",
                                completed: "已完成",
                                pending: "处理中",
                                refunded: "已退款"
                            },
                            dateRange: {
                                label: "时间段",
                                all: "全部时间",
                                today: "今天",
                                week: "近7天",
                                month: "近30天"
                            },
                            results: "{count} 条结果"
                        },
                        headers: {
                            id: "ID",
                            userId: "用户ID",
                            amount: "金额",
                            status: "状态",
                            date: "日期",
                            actions: "操作"
                        },
                        refund: {
                            button: "退款",
                            confirmTitle: "确认退款",
                            confirmDescription: "确定要向用户 {userId} 退款 {amount} 日元吗？",
                            cancel: "取消",
                            confirm: "确认退款",
                            success: "退款处理成功",
                            error: "退款处理失败"
                        }
                    }
                },
                charge: {
                    title: "信用卡充值",
                    description: "使用信用卡充值金币。请选择充值金额。",
                    currentBalance: "当前余额：",
                    coin: "金币",
                    coins: "金币",
                    legal: "交易法律信息",
                    button: {
                        charge: "¥{price}",
                        processing: "处理中..."
                    },
                    success: {
                        title: "充值完成",
                        coins: "金币",
                        legal: "交易法律信息",
                        button: {
                            charge: "¥{price}",
                            processing: "处理中..."
                        },
                        success: {
                            title: "充值成功",
                            description: "已成功充值{coins}金币"
                        },
                        error: {
                            title: "错误",
                            description: "充值失败"
                        }
                    },
                    gachaForm: {
                        title: "扭蛋设置",
                        oneTimeFree: {
                            label: "启用首次免费抽取"
                        },
                        toast: {
                            createSuccess: "扭蛋创建成功",
                            updateSuccess: "扭蛋更新成功",
                            error: "发生错误",
                            genericError: "发生意外错误",
                            validationError: "请检查输入内容"
                        },
                        languageSettings: {
                            ja: "日语设置",
                            en: "英语设置",
                            zh: "中文设置"
                        },
                        commonSettings: {
                            title: "通用设置",
                            pityThreshold: {
                                label: "Pity Threshold",
                                placeholder: "Enter pity threshold",
                                help: "Guarantees a rarity E item after this many pulls"
                            },
                            type: {
                                placeholder: "选择扭蛋类型",
                                normal: "普通扭蛋",
                                limited: "限定扭蛋",
                                special: "特别扭蛋"
                            },
                            price: {
                                label: "价格",
                                placeholder: "输入价格"
                            },
                            period: {
                                label: "期限（天数）",
                                placeholder: "输入期限"
                            },
                            dailyLimit: {
                                label: "每日限制次数",
                                placeholder: "输入限制次数",
                                unlimited: "无限制"
                            },
                            category: {
                                label: "分类",
                                placeholder: "选择分类",
                                noCategories: "没有可用的分类",
                            },
                        },
                        itemSettings: {
                            title: "物品设置",
                            name: "物品名称",
                            rarity: {
                                label: "稀有度",
                                normal: "普通",
                                rare: "稀有",
                                superRare: "超稀有"
                            },
                            exchangeRate: "兑换率",
                            stock: "库存",
                            probability: "概率 (%)",
                            addItem: "添加物品",
                            lastOnePrize: "最后一个奖品",
                        },
                        thumbnail: {
                            title: "缩略图",
                            recommendedSize: "推荐尺寸: 1200x900px",
                            maxFileSize: "最大文件大小：10MB",
                            supportedFormats: "支持格式：JPG，PNG"
                        },
                        status: {
                            active: "启用"
                        },
                        submit: "保存",
                        validation: {
                            categoryRequired: "请选择类别",
                            thumbnailRequired: "请选择缩略图"
                        }
                    },
                    upload: {
                        clickToUpload: "点击上传",
                        dragAndDrop: "或拖拽文件"
                    },
                    admin: {
                        gachaTable: {
                            headers: {
                                thumbnail: "缩略图",
                                name: "名称",
                                type: "类型",
                                price: "价格",
                                period: "期限",
                                status: "状态",
                                actions: "操作"
                            },
                            types: {
                                normal: "普通",
                                limited: "限定",
                                special: "特别"
                            },
                            status: {
                                active: "启用",
                                inactive: "停用"
                            },
                            period: {
                                unlimited: "无限期",
                                days: "{days}天"
                            },
                            points: "点数",
                            edit: "编辑",
                            delete: "删除",
                            confirmDelete: "您确定要删除这个扭蛋吗？",
                            deleteSuccess: "扭蛋已删除",
                            deleteSuccessDescription: "扭蛋已成功删除",
                            deleteError: "删除扭蛋失败",
                            deleteErrorDescription: "删除扭蛋时发生错误",
                            deleteConfirmDescription: "此操作无法撤销。这将永久删除扭蛋及其所有相关数据。"
                        },
                        payments: {
                            title: "支付管理",
                            search: {
                                placeholder: "按用户ID搜索",
                                button: "搜索",
                                clear: "清除",
                                results: "搜索结果"
                            },
                            details: {
                                paymentId: "支付ID",
                                userId: "用户ID",
                                date: "日期",
                                amount: "¥{amount}",
                                status: {
                                    completed: "已完成",
                                    processing: "处理中"
                                }
                            }
                        },
                        users: {
                            title: "用户列表",
                            loading: "加载中...",
                            table: {
                                username: "用户名",
                                email: "邮箱",
                                status: "状态",
                                points: "点数余额",
                                registrationDate: "注册日期",
                                actions: "操作",
                                details: "详情"
                            },
                            status: {
                                active: "正常",
                                suspended: "暂停",
                                banned: "封禁"
                            },
                            search: {
                                placeholder: "输入用户名或邮箱搜索",
                            },
                            messages: {
                                fetchError: "获取用户列表失败",
                                statusUpdateSuccess: "状态更新成功",
                                statusUpdateError: "状态更新失败",
                                fetchDetailsError: "获取用户信息失败",
                                noUsersFound: "未找到用户",
                                searchError: "搜索时发生错误",
                            },
                            details: {
                                title: "用户详情",
                                basicInfo: "基本信息",
                                username: "用户名",
                                email: "邮箱",
                                status: "状态",
                                coinBalance: "代币余额",
                                name: "姓名",
                                phone: "电话",
                                transactions: "交易记录",
                                payments: "支付记录",
                                transactionDate: "交易日期",
                                paymentDate: "支付日期",
                                type: "类型",
                                method: "支付方式",
                                description: "说明",
                                amount: "金额"
                            },
                        },
                        support: {
                            inquiries: {
                                title: "咨询列表",
                                table: {
                                    id: "ID",
                                    user: "用户",
                                    userId: "ユーザーID",
                                    subject: "件名",
                                    status: "ステータス",
                                    date: "日付",
                                    actions: "アクション"
                                },
                                filter: {
                                    status: "按状态筛选",
                                    all: "显示全部"
                                },
                                status: {
                                    pending: "未対応",
                                    inProgress: "対応中",
                                    resolved: "対応済み"
                                },
                                noData: "没有找到咨询",
                                noDataDescription: "没有可显示的咨询",
                                messages: {
                                    loadError: "問い合わせの取得に失敗しました",
                                    updateSuccess: "ステータスを更新しました",
                                    updateError: "ステータスの更新に失敗しました"
                                }
                            }
                        }
                    },
                    reports: {
                        title: "报告",
                        types: {
                            sales: "销售数据",
                            users: "用户数据",
                            inventory: "库存数据"
                        },
                        chart: {
                            sales: "销售",
                            users: "用户",
                            inventory: "库存",
                            active: "活跃",
                            suspended: "已暂停",
                            banned: "已封禁"
                        },
                        export: {
                            csv: "导出CSV",
                            pdf: "导出PDF",
                            success: "{format}文件下载成功",
                            error: "导出失败"
                        },
                        error: "错误: {message}"
                    },
                    rankings: {
                        title: "用户排名",
                        tabs: {
                            daily: "每日",
                            weekly: "每周",
                            monthly: "每月"
                        },
                        topUser: {
                            title: "顶级用户",
                            dailyRanking: "每日排名#1",
                            pointsEarned: "获得积分",
                            points: "{points} pt"
                        },
                        table: {
                            rank: "排名",
                            user: "用户",
                            points: "积分",
                            suffix: "",
                            userAlt: "{user}的头像"
                        }
                    }
                }
            }
        },
        privacy: {
            title: "隐私政策",
            established: "制定日期：{date}",
            lastUpdated: "最后更新：{date}",
            sections: {
                introduction: {
                    title: "1. 简介",
                    content: "SHIJON（以下简称\"公司\"）制定本隐私政策（以下简称\"政策\"），规定在本网站提供的服务（以下简称\"服务\"）中对用户个人信息的处理方式。"
                },
                collection: {
                    title: "2. 个人信息收集方式",
                    content: "公司可能在用户注册时询问姓名、出生日期、地址、电话号码、电子邮件地址、银行账号、信用卡号码等个人信息。此外，我们可能从合作伙伴（包括信息提供者、广告商和广告投放方，以下简称\"合作伙伴\"）处收集用户与合作伙伴之间的交易记录和支付信息等包含个人信息的数据。"
                },
                purpose: {
                    title: "3. 个人信息收集和使用目的",
                    content: `公司收集和使用个人信息的目的如下：
      
      • 提供和运营公司服务
      • 回应用户询问（包括身份验证）
      • 在用户违反或可能违反使用条款时进行确认和警告
      • 允许用户查看、修改、删除其注册信息并确认使用状态
      • 对付费服务向用户收费
      • 与上述目的相关的其他用途`
                },
                sharing: {
                    title: "4. 个人信息的共享",
                    content: `除以下情况和个人信息保护法及其他法律法规允许的情况外，公司不会在未经用户事先同意的情况下向第三方提供个人信息：
      
      • 为保护人身安全、财产等需要，且难以获得本人同意时
      • 为提高公共卫生或促进儿童健康成长特别需要，且难以获得本人同意时
      • 配合国家机关、地方政府或其委托方执行法律规定的事务，且获得本人同意可能会妨碍该事务执行时`
                },
                disclosure: {
                    title: "5. 个人信息的披露",
                    content: `当本人请求披露个人信息时，公司将及时向本人披露。但如果披露属于以下任何情况，我们可能不会披露全部或部分信息，并将及时通知不予披露的决定：
      
      • 可能损害本人或第三方的生命、身体、财产或其他权益时
      • 可能严重妨碍公司正常业务运营时
      • 会违反其他法律法规时`
                },
                correction: {
                    title: "6. 个人信息的更正和删除",
                    content: `如果用户发现公司持有的个人信息不正确，可以按照公司规定的程序要求更正、添加或删除个人信息（以下简称"更正等"）。`
                },
                stopUse: {
                    title: "7. 个人信息使用的停止",
                    content: `当本人以个人信息的使用超出目的范围或通过不正当手段获取为由，要求停止使用或删除（以下简称"停止使用等"）个人信息时，公司将立即进行必要的调查。`
                },
                changes: {
                    title: "8. 隐私政策的变更",
                    content: `除法律和本政策另有规定的事项外，本政策的内容可能在不通知用户的情况下进行变更。`
                },
                contact: {
                    title: "9. 联系方式",
                    content: `关于本政策的咨询，请通过以下方式联系：
      
      地址：邮编XXX-XXXX 东京都XX区XX1-2-3
      公司名称：SHIJON株式会社
      负责部门：客户支持
      电子邮件：privacy@gachagame.com`
                }
            },
            footer: {
                conclusion: "政策结束"
            }
        },
        legal: {
            title: "商业交易法披露",
            sections: {
                seller: {
                    title: "销售商",
                    content: "Gacha游戏公司"
                },
                representative: {
                    title: "代表人",
                    content: "首席执行官 山田太郎"
                },
                address: {
                    title: "地址",
                    content: "〒123-4567\n东京都涩谷区Gacha町1-2-3 Gacha大厦5楼"
                },
                phone: {
                    title: "电话号码",
                    content: "03-1234-5678（服务时间：工作日10:00～18:00）"
                },
                email: {
                    title: "电子邮箱",
                    content: "info@gachagame.com"
                },
                url: {
                    title: "网址",
                    content: "https://www.gachagame.com"
                },
                businessDetails: {
                    title: "事業内容",
                    content: "オンラインサービス"
                },
                price: {
                    title: "商品价格",
                    content: "详见各商品页面"
                },
                additionalFees: {
                    title: "其他费用",
                    content: "消费税"
                },
                paymentMethods: {
                    title: "支付方式",
                    content: "信用卡支付、运营商支付及其他公司指定的支付方式"
                },
                paymentTiming: {
                    title: "支付时间",
                    content: "购买商品时"
                },
                delivery: {
                    title: "商品交付时间",
                    content: "购买完成后立即提供数字内容"
                },
                returns: {
                    title: "退款与取消",
                    content: "由于数字内容的特殊性质，购买后不接受退款或取消。但是，如果因本公司原因导致无法提供数字内容，请通过咨询表单与我们联系。"
                },
                requirements: {
                    title: "系统要求",
                    content: "推荐配置：iOS 14.0或更高版本，Android 8.0或更高版本\n部分设备可能无法运行"
                },
                security: {
                    title: "安全保障",
                    content: "本网站采用SSL加密通信。我们会妥善管理您的个人信息，不会向第三方提供。"
                }
            },
            footer: {
                update: "本页面内容可能会随时更新。",
                contact: "如需了解最新信息，请通过咨询表单与我们联系。"
            }
        },
        forgotPassword: {
            title: "重置密码",
            description: "输入您的邮箱地址，我们将向您发送密码重置链接",
            email: {
                label: "邮箱",
                placeholder: "请输入邮箱",
                invalid: "请输入有效的邮箱地址"
            },
            submit: {
                default: "发送重置链接",
                loading: "发送中..."
            },
            toast: {
                success: {
                    title: "请查收邮件",
                    description: "如果该邮箱存在账号，我们已向您发送密码重置说明。"
                },
                error: {
                    title: "错误",
                    description: "发生错误，请稍后重试。"
                }
            }
        }
    }
} as const;
