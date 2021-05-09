import axios from '../../js/axios/caxios'
import {cookie} from '../../js/utils'

import qs from "querystring"

// const isClient = process.env.VUE_ENV === 'client'
const isClient = true
const domain = isClient ? '//api.bilibili.com' : '//api.bilibili.co'
/* eslint-disable */
// 获取运营位数据
export const getLocs = (ids, {cookie = {}, headers = {}, surl = {}} = {}) => {
    let config = {
        url: `${domain}/x/web-show/res/locs`,
        query: {
            pf: 0,
            ids: ids
        },
        withCredentials: true,
    }
    if (!isClient) {
        config.headers = headers
        delete config.headers['referer']
        config.sUrl = surl['main.web-svr.web-show'] || ''
    }
    return {
        then(f) {
            f(
                {
                    data:
                        {
                            "code": 0, "count": 1, "data": {
                                "142": [{
                                    "id": 1,
                                    "contract_id": "",
                                    "pos_num": 0,
                                    "name": "",
                                    "pic": "https://i0.hdslb.com/bfs/vc/ab61ab76a225646e3bcb162b0f8fb2aa47f1f66c.png",
                                    "litpic": "https://i0.hdslb.com/bfs/vc/c1e19150b5d1e413958d45e0e62f012e3ee200af.png",
                                    "url": "",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "area": 0,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 0,
                                    "mid": "",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "1550": [{
                                    "id": 687884,
                                    "contract_id": "",
                                    "pos_num": 2,
                                    "name": "B站电竞赛事全收录",
                                    "pic": "",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/blackboard/gaming_on_bilibili.html",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 1552,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1616853600,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "29": [{
                                    "id": 687156,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "令人血脉偾张的全新盛宴",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/c5485c331cddb03e6e7cd7f1d7739b9b1ad516a7.jpg",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/read/cv10464437?from=1002",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "src_id": 30,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1617012000,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "31": [{
                                    "id": 517357,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "游戏赛事库",
                                    "pic": "http://i0.hdslb.com/bfs/archive/31b8d2617cb8d6b01e98425b7eba39ae9f973c20.png",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/v/game/match",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "src_id": 32,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1591327800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "3197": [{
                                    "id": 686587,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "bilibili 2021 国产动画4月导视",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/fa16696cf8d4b56f9cbc494192bac9413f5bda76.jpg",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/blackboard/topic/activity-2021guochuangQ2-m.html",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3198,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1616986800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 0,
                                    "contract_id": "",
                                    "pos_num": 2,
                                    "name": "喜剧人的像素风游戏",
                                    "pic": "https://i0.hdslb.com/bfs/sycp/creative_img/202103/66d5f057e7d2e2988375c7c3d602c36e.jpg",
                                    "litpic": "",
                                    "url": "https://ad-bili-data.biligame.com/v2/api/click/pc_bili?mid=__MID__\u0026ip=175.9.129.118\u0026request_id=1617055429226q172a25a163a167q5761\u0026ts=__TS__\u0026ua=__UA__\u0026ad_channel_id=3\u0026ad_f=0903c6a3591b43429a69fb9888588a6e\u0026game_id=1594",
                                    "style": 0,
                                    "is_ad": true,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "creative_id": 479352430898253824,
                                    "src_id": 3199,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "CAAQABiAoKSv8I/A0wYgACgAMCQ4/xhCITE2MTcwNTU0MjkyMjZxMTcyYTI1YTE2M2ExNjdxNTc2MUjq5I6AiC9SBumVv+aymVoG5rmW5Y2XYgbkuK3lm71oA3AAeICAgICQEoABAIgB+IMBkgENMTc1LjkuMTI5LjExOJoB8RJhbGw6ZGVmYXVsdCxjcGNUYWdGaWx0ZXI6dW5kZWZpbmVkLHBwY3RyOmNvbnN0YW50LG5vX2FkOnVuZGVmaW5lZCxicnVzaF9kdXA6ZGVmYXVsdCxmZF9wY3RyOnJlYWx0aW1lX2N0cl92MixkeW5fY3RyOmRlbHRhMixkeW5fY3ZyOm5ldzIsdWZyYW1lX2N2cjpiYXNlLGN2cl9wOmJydXNoX2JhY2syLGRjdnJmOmNvbnN0YW50LGN2cl9mOmJhY2ssY3BhOmJhc2Usb2NweFV2OnJlbWFpbixvY3B4UmVjYWxsOnJlY2FsbCxVVjp1bmRlZmluZWQsaGFzaFVWOnVuZGVmaW5lZCxwdjpELGZkX3JhbmRvbTpkZWZhdWx0LGZsb3dfcmF0aW86cjMsZG1wX2FnZTpidXZpZF9kbXAsbkZlZEJhY2s6bG9vc2UscWlmZWk6Y29ldXNfZ21fMDMsZmlsdGVyT3B0Om9wZW4saW5uZXJfZW5oYW5jZTpjbG9zZSxSUzpkcGFfY29udGVudCxkcHM6ZGVmYXVsdCxvcGVuZmx5bmV3Om9wZW4sZmx5X3BjdnI6aG0sZmx5X29jcG06bm9fZWUsZmx5X2NwYTpwaWRxLGg1X3Y6Y29tcGFyZSxwRU46UFIsc0ZCcnU6MyxmZFNCOmRlZmF1bHQsdGltZUZyZXE6ZGVmYXVsdCxjdWNvOjEyMCxwdWNvOmR5bmFtaWMsdXZUZXN0OmEyLG9jcG1UaHI6ZGVmYXVsdCxkb3duZ3JhZGU6bm9fdjIsZEFkeDpkZWZhdWx0LHVzZUdycGM6dHJ1ZSxtZXJjeVBiOm5ld191bml0X3dlaWdodCxmcmVTOnVlbG9zc19jb2V1cyxjb2Fyc2U6Y29hcnNlX2N2cl9uZXdjb252LGhkZXRhaWxzOmJhc2UscHBCOnNob3csY3Jvd2RTOkQsY29sZFI6Y29uc3RhbnQsZmx5X3RydW5wOm1vdXQsZmx5X3RydW5wbHVzOnByZWQsYnVwX2NwYzpvcGVuLHNtYXJ0YmlkOmRlZmF1bHQsZmx5X3NtYXJ0YmlkOm9wZW5fZGVmYXVsdCxhbGxGbG93OmRlZmF1bHQsY3Jvd2RzTG9nOmVuYWJsZSxlY3BtOmRlZmF1bHQscGN0cl9jcG06Y3BtLHBjdHJfY29uc3RhbnQ6ZGZ0LGR5bmFtaWNfZmxvd19jb250cm9sOnNwbGl0IHRoZSBmbG93IGJ5IG1pZCxvdXRlckJlYXRJbm5lcjpkZWZhdWx0LG91dGVyUXVpdDpkZWZhdWx0LGNvbGRfYm9vdF9leHA6ZGVmYXVsdCxudGhfYnJ1c2hfZXZlbnQ6ZGVmYXVsdCxsb3dfcXR5X2NyZWF0aXZlOmxvd19xdHksZW5hYmxlUGFyYWxsZWw6dHJ1ZSxsaW1pdF9hZHg6ZGVmYXVsdCxzb3J0QWR4OnNvcnRBZHhfdHJ1ZSxvY3BtVHdvU3RhZ2VQY3ZyVGhyZXNob2xkRXhwOmRlZmF1bHQscHBTQjpvcGVuLGNyZWF0aXZlRnJlcUZpbHRlcjpjbHVzdGVyLGJsb2NrQ29tbWVudDpkZWZhdWx0LG9jcG1fc3VwcG9ydDpvcGVuQ29udGVudFVwQ29uZmlnTGFtYmRhLGZseV9jcG1fZWNwbTpvcGVuLG1ldDozMzUsYnVkZ2V0X3Ntb290aF9uZXc6Y29uc3RhbnQscGNFeHBlcmltZW50OnBjRXhwZXJpbWVudEVuYWJsZSxwY3BjdnI6YmFzZSxlbmFibGVBcHBTdG9yZVByZWxvYWQ6ZW5hYmxlLGNhc3NpbmlDVFI6aG91cmx5LGNhc3NpbmlGZWVkc0NWUjpjb21tbW9uLGNhc3NpbmlFeHA6c21hbGxfYnVkZ2V0X2Nsb3NlLENyZWF0aXZlUXVhbGl0eTpyZW1haW4scnRhRXhwOmNsb3NlLGdpZl9leHA6YmFzZSxpbmxpbmVFeHA6cGxhbkIscHJvZ3JhbUNyZWF0aXZlOmZlZWRjdHIsb3BlbkJ1c2luZXNzVXBDcGM6b3BlbixicmFuZEluZm9FeHA6ZGVmYXVsdCxkcGEyU3RyYXRlZ3k6ZGVmYXVsdCxicmFuZENsb3NlUHJTaG93QWQ6dHJ1ZSxkcGEyOmNsb3NlQ3Jvd2QsaW5kZXhfb3B0Om9wZW4saW5kZXhfb3B0X3YyOm9wZW4sZmlsdGVyX2ZvcndhcmQ6YXNfc2tpcF9pbm5lcl9leHAscmVzZXJ2ZV9wcmljZTpnc3Bfb25seV9kcGEsYmdUYWc6YWxsLHVzZUFzOm9wZW4sYnV2aWREbXBVc2VyUHJvZmlsZUV4cDpvcGVuLGFyZWFSZXBsYWNlOmRlZmF1bHQsaGl0X25lYnVsYV9pbmRleDpvcGVuLHNraXBBY2dWaWRlb0NhdGVnb3J5RmlsdGVyOmNsb3NlLG9jcHhDb252ZXJzaW9iRmlsdGVyOm9wZW4scmlza0NhdGVnb3J5RnJlcUNvbnRyb2xVcGdyYWRlOmRlZmF1bHQscGVyc29uYVRoaXJkU3dpdGNoOmRlZmF1bHQsbXVsdGlfdGVtcGxhdGVfaWRfc2VsZWN0Om9wZW4sZW5hYmxlX3JlZGlzX3ByZWZpeDpvcGVuLHVuZGVyX2ZyYW1lX3RydXN0X2ZyZXE6YmFzZSxuaW50aDpvcGVuLHVuZGVyX2ZyYW1lX2VjcG1fZXhwOmJhc2UsdXNlX2lwZGJfZXhwOm9wZW4saW5uZXJfb3V0ZXJfYmlkX2V4cDpleHA1LGVuYWJsZUZyZXFBQjpvcGVuLER5bmFtaWNTY2VuZU9jcHg6b3BlbixjcmVhdGl2ZVF1YWxpdHlVc2VOZXdJY29uOm9wZW4sRHBhQ3JlYXRpdmVTdHJhdGVneUV4cGVyaW1lbnQ6dGl0bGVfc3RyYXRlZ3lfMTAxLGF1dG9fZ2lmOmJhc2Usc3dpdGNoQnNQZ1JlcVJhdGlvOmNsb3NlLHBsYXlwYWdlX2NhcmR0eXBlOmJhc2UsdXNlQXNQZzpjbG9zZSxiZXN0Q3JlYXRpdmU6Y29uc3RhbnQsbkZlZEJhY2sxOmxvb3NlLGRBZHgxOmRlZmF1bHQsbWlkX2FhOmV4cF8xLHB2X2FhOmV4cF8xLHV2X2FhOmRlZmF1bHQscGxhdGZvcm06ZGVmYXVsdKABAKgBALIBIPw0+NYjgVbjL0WX4RnvNRMLn8x9KDCqfrgZmSFHkuPZugHXAWh0dHBzOi8vYWQtYmlsaS1kYXRhLmJpbGlnYW1lLmNvbS92Mi9hcGkvY2xpY2svcGNfYmlsaT9taWQ9X19NSURfXyZpcD0xNzUuOS4xMjkuMTE4JnJlcXVlc3RfaWQ9MTYxNzA1NTQyOTIyNnExNzJhMjVhMTYzYTE2N3E1NzYxJnRzPV9fVFNfXyZ1YT1fX1VBX18mYWRfY2hhbm5lbF9pZD0zJmFkX2Y9MDkwM2M2YTM1OTFiNDM0MjlhNjlmYjk4ODg1ODhhNmUmZ2FtZV9pZD0xNTk0wgEA0gEA2AGRAeABAOgBAPABAPgBAIACAIgCALgCAMACAMgCANACANgCAOoCAPACkfQK+AIAiAMBkgMAqAMAsAMAuAMAwgMAyAMh0gNKeyIxIjoiNDc5MzUyNDMwODk4MjUzODI0IiwiMiI6IjM2IiwiMyI6IjM2IiwiNCI6IjkwIiwiNSI6IjI5MiIsIjYiOiIzNl8wIn3gAwDoAwLwAwD6AwVvdGhlcoIECW51bGw6bnVsbIgEAJAEAJgEAKAEAKoEBAgAEASwBAA=",
                                    "title": "喜剧人的像素风游戏",
                                    "server_type": 1,
                                    "cm_mark": 1,
                                    "stime": 0,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688562,
                                    "contract_id": "",
                                    "pos_num": 3,
                                    "name": "我的人生早已失控多年",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/4440fe55e722677b8dcd0b188c664d90327b2062.png",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/read/cv10302873?from=1002",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "src_id": 3200,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1617012000,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688207,
                                    "contract_id": "",
                                    "pos_num": 4,
                                    "name": "骷髅岛靓仔出没，请注意！",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/827595840960ef5626ebd78dd68f5da9112954be.jpg",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/bangumi/play/ep396058",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3201,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1616986800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688160,
                                    "contract_id": "",
                                    "pos_num": 5,
                                    "name": "真正的交流会上线了？",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/0ff59cfd2e627dcc62e3371dee44eeed75828063.jpg",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/read/cv10486059",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3202,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1616986800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "34": [{
                                    "id": 0,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "学剪辑，自由接单，大学生也能经济独立！",
                                    "pic": "https://i0.hdslb.com/bfs/sycp/creative_img/202103/f5bcdbf6787ef91626ce1b1cc47735df.jpeg",
                                    "litpic": "",
                                    "url": "https://mz.tanzhouedu.com/?s=tzwgc28ae65dd861dce93\u0026track_id=d_JAIAYCbmbtIIbdPt1gKlBKcoBLo5_8IMFLL53Jo-5PH_BHR-IdMli3mdfjiT5t_Q0qY0vreqGEqkcBSj-c77ULJZclu8KRBMvLF1MAFfZ6bphxSehTPLdawaleHfEc13czX-GADvWr-qLDSuXV6O-Wjz5kGh9J7UTnxAIYFx8gbvwcNl2MFZ0g_-do4HoO\u0026crid=92933122\u0026idfa=__IDFA__\u0026imei=__IMEI__\u0026oaid=__OAID__",
                                    "style": 0,
                                    "is_ad": true,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "creative_id": 92933122,
                                    "src_id": 35,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "CIeSOhClzbYBGIKYqCwgsgYoATC7GjgjQiExNjE3MDU1NDI5MjI2cTE3MmEyNWExNjNhMTY3cTU3NjFI6uSOgIgvUgbplb/msplaBua5luWNl2IG5Lit5Zu9aANwAHiAgICAkBiAAQOIAQCSAQ0xNzUuOS4xMjkuMTE4mgEAoAGIB6gBArIBIA1ejF6B1h/vv8PMGDJB0EPCNW4wwq7lfUdBM8s4fal/ugG0Amh0dHBzOi8vbXoudGFuemhvdWVkdS5jb20vP3M9dHp3Z2MyOGFlNjVkZDg2MWRjZTkzJnRyYWNrX2lkPWRfSkFJQVlDYm1idElJYmRQdDFnS2xCS2NvQkxvNV84SU1GTEw1M0pvLTVQSF9CSFItSWRNbGkzbWRmamlUNXRfUTBxWTB2cmVxR0Vxa2NCU2otYzc3VUxKWmNsdThLUkJNdkxGMU1BRmZaNmJwaHhTZWhUUExkYXdhbGVIZkVjMTNjelgtR0FEdldyLXFMRFN1WFY2Ty1Xano1a0doOUo3VVRueEFJWUZ4OGdidndjTmwyTUZaMGdfLWRvNEhvTyZjcmlkPTkyOTMzMTIyJmlkZmE9X19JREZBX18maW1laT1fX0lNRUlfXyZvYWlkPV9fT0FJRF9fwgEDMTI30gEA2AHBAeABoI0G6AGgnAHwAQD4AbIGgAICiAIAkgL7AjMxMjYwMDlfMTYxNzA0NzM1MiwyNDMyNDI3XzE2MTcwNDczNTIsMjU5MDkxMl8xNjE3MDQ3MzUyLDI2MzIwMDBfMTYxNzA0OTkyNSwzMTMwMjA4XzE2MTcwNDk5MjUsMzExNjY1Nl8xNjE3MDQ5OTI1LDMxMzAxNzVfMTYxNzA1MTQwMCwyMzUyNjI2XzE2MTcwNTE0MDAsMzExNjY0NF8xNjE3MDUxNDAwLDI0OTA0MDhfMTYxNzA1MTQwMCwzMTMwMjA2XzE2MTcwNTE0MTMsMzA3Njg5NF8xNjE3MDUxNDEzLDMwNjMxMjRfMTYxNzA1MTQ0MCwzMTE1NjEyXzE2MTcwNTE0NDAsMjU5MDkxMl8xNjE3MDUxNDQwLDMwNDI5MTBfMTYxNzA1MTQ1OCwzMDc2ODU0XzE2MTcwNTE0NTgsMjk4NDUwNl8xNjE3MDUxNDU4LDMxMzAxNzVfMTYxNzA1MTUwMSwzMDc2ODk0XzE2MTcwNTE1MDGYAu/44gGgArIRqAKQ2AmwAmS4AgDAAuDFCMgCtATqAgD4At4ZiAMBkgMAqAMAsAMAuAMAyAMh0gNDeyIxIjoiOTI5MzMxMjIiLCIyIjoiMzM4NyIsIjMiOiIzIiwiNCI6IjM4IiwiNSI6IjMyNyIsIjYiOiIzXzMyOTQifeADAugDAvADAPoDBW90aGVyggQJbnVsbDpudWxsiASIB5AEAKAEIqoEBwjBr58BEASqBAcI/dGFARABuAQKwAQE2AQA",
                                    "title": "学剪辑，自由接单，大学生也能经济独立！",
                                    "server_type": 1,
                                    "cm_mark": 1,
                                    "stime": 0,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "0基础学剪辑",
                                    "adver_name": "潭州教育",
                                    "null_frame": false
                                }, {
                                    "id": 688710,
                                    "contract_id": "",
                                    "pos_num": 2,
                                    "name": "街头奏响 东京食尸鬼《Unravel》时，外套男孩兴奋不已！",
                                    "pic": "http://i0.hdslb.com/bfs/archive/74130cc3d25498b59621ce8ea5f5946f78e8382f.png",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1Z64y1D7sb",
                                    "style": 0,
                                    "archive": {
                                        "aid": 757287743,
                                        "videos": 1,
                                        "tid": 59,
                                        "tname": "演奏",
                                        "copyright": 1,
                                        "pic": "http://i2.hdslb.com/bfs/archive/74130cc3d25498b59621ce8ea5f5946f78e8382f.png",
                                        "title": "街头奏响 东京食尸鬼《Unravel》时，外套男孩兴奋不已！",
                                        "pubdate": 1616810442,
                                        "ctime": 1616810443,
                                        "desc": "BGM：Unravel                                   希望各位观众朋友们喜欢~，请给予三连哦~                                                           PS： 该版本是以Animenzzz的基础上略有改编",
                                        "state": 0,
                                        "duration": 220,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 1,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 13677047,
                                            "name": "Piano莱特",
                                            "face": "http://i2.hdslb.com/bfs/face/edf6a0ae7dfe9adb5e8d5e813a69455554931c73.jpg"
                                        },
                                        "stat": {
                                            "aid": 757287743,
                                            "view": 164182,
                                            "danmaku": 504,
                                            "reply": 830,
                                            "favorite": 1893,
                                            "coin": 3113,
                                            "share": 154,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 16971,
                                            "dislike": 0
                                        },
                                        "dynamic": "",
                                        "cid": 315532344,
                                        "dimension": {"width": 3840, "height": 2160, "rotate": 0},
                                        "bvid": "BV1Z64y1D7sb"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 36,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1617033600,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 0,
                                    "contract_id": "",
                                    "pos_num": 3,
                                    "name": "大触带你靠画画接单赚钱！",
                                    "pic": "https://i0.hdslb.com/bfs/sycp/creative_img/202103/a611a2e8d3f94dfb658ddb16e8584c0f.jpg",
                                    "litpic": "",
                                    "url": "https://cm.bilibili.com/mgk/page/475706211687624704?buvid=__BUVID__\u0026mid=__MID__\u0026imei=__IMEI__\u0026duid=__DUID__\u0026idfa=__IDFA__\u0026android_id=__ANDROIDID__\u0026os=3\u0026request_id=1617055429226q172a25a163a167q5761\u0026source_id=37\u0026track_id=d_JAIAYCbmbtIIbdPt1gKlBKcoBLo5_8IMFLL53Jo-5PH_BHR-IdMli3mdfjiT5t_Q0qY0vreqGEqkcBSj-c77ULJZclu8KRBMvLF1MAFfY7mdw-Dmnmc_48xwlo5MjRM1jtPHV_QnUL4hd_lCmDs6xTDEhQPttvaXMJmW-P1rgb0llfaAvJyReWiQ4tzeai\u0026creative_id=93085569\u0026adtype=CPC",
                                    "style": 0,
                                    "is_ad": true,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "creative_id": 93085569,
                                    "src_id": 37,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "CO++OxD25bsBGIG/sSwg+gQoATCZxRY4JUIhMTYxNzA1NTQyOTIyNnExNzJhMjVhMTYzYTE2N3E1NzYxSOrkjoCIL1IG6ZW/5rKZWgbmuZbljZdiBuS4reWbvWgDcAB4gICAgJAYgAEDiAEAkgENMTc1LjkuMTI5LjExOJoBAKAB/wSoAQKyASCIvph0yYSUW93YHSPoSOy3GCICmWt8SwfbtYFgVB2KcroBuwNodHRwczovL2NtLmJpbGliaWxpLmNvbS9tZ2svcGFnZS80NzU3MDYyMTE2ODc2MjQ3MDQ/YnV2aWQ9X19CVVZJRF9fJm1pZD1fX01JRF9fJmltZWk9X19JTUVJX18mZHVpZD1fX0RVSURfXyZpZGZhPV9fSURGQV9fJmFuZHJvaWRfaWQ9X19BTkRST0lESURfXyZvcz0zJnJlcXVlc3RfaWQ9MTYxNzA1NTQyOTIyNnExNzJhMjVhMTYzYTE2N3E1NzYxJnNvdXJjZV9pZD0zNyZ0cmFja19pZD1kX0pBSUFZQ2JtYnRJSWJkUHQxZ0tsQktjb0JMbzVfOElNRkxMNTNKby01UEhfQkhSLUlkTWxpM21kZmppVDV0X1EwcVkwdnJlcUdFcWtjQlNqLWM3N1VMSlpjbHU4S1JCTXZMRjFNQUZmWTdtZHctRG1ubWNfNDh4d2xvNU1qUk0xanRQSFZfUW5VTDRoZF9sQ21EczZ4VERFaFFQdHR2YVhNSm1XLVAxcmdiMGxsZmFBdkp5UmVXaVE0dHplYWkmY3JlYXRpdmVfaWQ9OTMwODU1NjkmYWR0eXBlPUNQQ8IBAzEyN9IBANgBwQHgAYCU69wD6AHAmgzwAQD4AfoEgAICiAIAkgL7AjMxMjYwMDlfMTYxNzA0NzM1MiwyNDMyNDI3XzE2MTcwNDczNTIsMjU5MDkxMl8xNjE3MDQ3MzUyLDI2MzIwMDBfMTYxNzA0OTkyNSwzMTMwMjA4XzE2MTcwNDk5MjUsMzExNjY1Nl8xNjE3MDQ5OTI1LDMxMzAxNzVfMTYxNzA1MTQwMCwyMzUyNjI2XzE2MTcwNTE0MDAsMzExNjY0NF8xNjE3MDUxNDAwLDI0OTA0MDhfMTYxNzA1MTQwMCwzMTMwMjA2XzE2MTcwNTE0MTMsMzA3Njg5NF8xNjE3MDUxNDEzLDMwNjMxMjRfMTYxNzA1MTQ0MCwzMTE1NjEyXzE2MTcwNTE0NDAsMjU5MDkxMl8xNjE3MDUxNDQwLDMwNDI5MTBfMTYxNzA1MTQ1OCwzMDc2ODU0XzE2MTcwNTE0NTgsMjk4NDUwNl8xNjE3MDUxNDU4LDMxMzAxNzVfMTYxNzA1MTUwMSwzMDc2ODk0XzE2MTcwNTE1MDGYAvCBwgKgAoMQqAKDyAywAke4AgDAAoCU69wDyALuAuoCAPgCtyaIAwGSAwCoAwCwAwC4AwDIAyHSA0p7IjEiOiI5MzA4NTU2OSIsIjIiOiIzNjkzMDUiLCIzIjoiMjMxOSIsIjQiOiIzOCIsIjUiOiI0NyIsIjYiOiIyMzE5XzQ5MTkifeADAugDAvADAPoDBW90aGVyggQJbnVsbDpudWxsiAT/BJAEAKAEIqoEBwj17p0BEASqBAcI+e6dARABuAQKwAQE2AQA",
                                    "title": "大触带你靠画画接单赚钱！",
                                    "server_type": 1,
                                    "cm_mark": 1,
                                    "stime": 0,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "一看就会一学就废",
                                    "adver_name": "衡阳原画",
                                    "null_frame": false
                                }, {
                                    "id": 688872,
                                    "contract_id": "",
                                    "pos_num": 4,
                                    "name": "周刊哔哩哔哩排行榜#562",
                                    "pic": "http://i0.hdslb.com/bfs/archive/ece9eb5eafb7be37b08352947a20503fb8178ac9.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1Pv41187ZN",
                                    "style": 0,
                                    "archive": {
                                        "aid": 247259190,
                                        "videos": 1,
                                        "tid": 27,
                                        "tname": "综合",
                                        "copyright": 1,
                                        "pic": "http://i2.hdslb.com/bfs/archive/ece9eb5eafb7be37b08352947a20503fb8178ac9.jpg",
                                        "title": "周刊哔哩哔哩排行榜#562",
                                        "pubdate": 1616990418,
                                        "ctime": 1616949676,
                                        "desc": "21年3月第4周 | 【PICK UP】栏目欢迎继续推荐，私信@周刊娘 ，附上推荐投稿的av/bv号与理由。请勿刷屏、引战",
                                        "state": 0,
                                        "duration": 1356,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 398300398,
                                            "name": "周刊娘",
                                            "face": "http://i0.hdslb.com/bfs/face/c62925c10274c9797ce24cd629ec9d0bee85541d.jpg"
                                        },
                                        "stat": {
                                            "aid": 247259190,
                                            "view": 21950,
                                            "danmaku": 503,
                                            "reply": 187,
                                            "favorite": 261,
                                            "coin": 428,
                                            "share": 51,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 1396,
                                            "dislike": 0
                                        },
                                        "dynamic": "",
                                        "cid": 316657417,
                                        "dimension": {"width": 1280, "height": 720, "rotate": 0},
                                        "bvid": "BV1Pv41187ZN"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 38,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1617015600,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 686917,
                                    "contract_id": "",
                                    "pos_num": 5,
                                    "name": "我画过女人味最重的浓颜妆 缺汉必化 沉浸式化妆",
                                    "pic": "http://i0.hdslb.com/bfs/archive/fda2197da762466bee486f8221cf6b78545e87be.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV18V411Y7yr",
                                    "style": 0,
                                    "archive": {
                                        "aid": 417128977,
                                        "videos": 1,
                                        "tid": 157,
                                        "tname": "美妆",
                                        "copyright": 1,
                                        "pic": "http://i0.hdslb.com/bfs/archive/fda2197da762466bee486f8221cf6b78545e87be.jpg",
                                        "title": "我画过女人味最重的浓颜妆 缺汉必化 沉浸式化妆",
                                        "pubdate": 1616242445,
                                        "ctime": 1616242446,
                                        "desc": "",
                                        "state": 0,
                                        "duration": 259,
                                        "mission_id": 16547,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 1,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 16282662,
                                            "name": "程裙子",
                                            "face": "http://i0.hdslb.com/bfs/face/adcde7467d74f9b947c22566851d761b03254fa1.jpg"
                                        },
                                        "stat": {
                                            "aid": 417128977,
                                            "view": 206111,
                                            "danmaku": 364,
                                            "reply": 286,
                                            "favorite": 7932,
                                            "coin": 2381,
                                            "share": 388,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 9851,
                                            "dislike": 0
                                        },
                                        "dynamic": "",
                                        "cid": 312920107,
                                        "dimension": {"width": 1920, "height": 1080, "rotate": 0},
                                        "bvid": "BV18V411Y7yr"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 39,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1616986800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688643,
                                    "contract_id": "",
                                    "pos_num": 6,
                                    "name": "这只猫猫就是逊啦",
                                    "pic": "http://i0.hdslb.com/bfs/archive/f14b7e8ca845200de3507f48de51f46cb621f070.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1dh411S7oT",
                                    "style": 0,
                                    "archive": {
                                        "aid": 204822190,
                                        "videos": 1,
                                        "tid": 47,
                                        "tname": "短片·手书·配音",
                                        "copyright": 1,
                                        "pic": "http://i2.hdslb.com/bfs/archive/f14b7e8ca845200de3507f48de51f46cb621f070.jpg",
                                        "title": "这只猫猫就是逊啦",
                                        "pubdate": 1616803506,
                                        "ctime": 1616658877,
                                        "desc": "我叫阿乘，我的视频还蛮多的，欢迎来我主页玩，玩累了就直接三连加关注，没问题的￣ε ￣ 。。听话！让你康康！（震吼）",
                                        "state": 0,
                                        "duration": 149,
                                        "mission_id": 16438,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 404216060,
                                            "name": "幾加乘",
                                            "face": "http://i2.hdslb.com/bfs/face/c96cf98f383108976a082c15b572d6d6bb05967f.jpg"
                                        },
                                        "stat": {
                                            "aid": 204822190,
                                            "view": 1102427,
                                            "danmaku": 2163,
                                            "reply": 1283,
                                            "favorite": 19531,
                                            "coin": 45783,
                                            "share": 10975,
                                            "now_rank": 0,
                                            "his_rank": 21,
                                            "like": 119385,
                                            "dislike": 0
                                        },
                                        "dynamic": "",
                                        "cid": 314991610,
                                        "dimension": {"width": 1280, "height": 720, "rotate": 0},
                                        "bvid": "BV1dh411S7oT"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3884,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1617033600,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "3441": [{
                                    "id": 667622,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "电竞赛事",
                                    "pic": "",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/v/game/match/?spm_id_from=333.851.b_696e7465726e6174696f6e616c486561646572.7",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3442,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1614070800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "3443": [{
                                    "id": 667625,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "2021拜年纪",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/2d46df9bbf585fc72155bd4904fd30545669f088.png",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/v/game/match",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3444,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1610184600,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "3449": [{
                                    "id": 688118,
                                    "contract_id": "rec_video",
                                    "pos_num": 1,
                                    "name": "【LPL春季赛】3月26日 FPX vs BLG",
                                    "pic": "http://i0.hdslb.com/bfs/archive/2df2050e87a66d683689deb1be311ff21fc82800.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1pB4y1P7ES",
                                    "style": 0,
                                    "archive": {
                                        "aid": 587315319,
                                        "videos": 3,
                                        "tid": 171,
                                        "tname": "电子竞技",
                                        "copyright": 1,
                                        "pic": "http://i1.hdslb.com/bfs/archive/2df2050e87a66d683689deb1be311ff21fc82800.jpg",
                                        "title": "【LPL春季赛】3月26日 FPX vs BLG",
                                        "pubdate": 1616760161,
                                        "ctime": 1616760161,
                                        "desc": "【LPL春季赛】3月26日 FPX vs BLG",
                                        "state": 0,
                                        "duration": 5897,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 0,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 50329118,
                                            "name": "哔哩哔哩英雄联盟赛事",
                                            "face": "http://i0.hdslb.com/bfs/face/cb620bbb9071974f37843134875d472b47532a97.jpg"
                                        },
                                        "stat": {
                                            "aid": 587315319,
                                            "view": 1013104,
                                            "danmaku": 8921,
                                            "reply": 6756,
                                            "favorite": 1302,
                                            "coin": 1898,
                                            "share": 659,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 15653,
                                            "dislike": 0
                                        },
                                        "dynamic": "#LPL##英雄联盟##LPL春季赛##2021LPL##电子竞技##FPX##BLG# 【LPL春季赛】3月26日 FPX vs BLG",
                                        "cid": 315524556,
                                        "dimension": {"width": 1920, "height": 1080, "rotate": 0},
                                        "bvid": "BV1pB4y1P7ES"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3450,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1614762000,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688125,
                                    "contract_id": "rec_video",
                                    "pos_num": 2,
                                    "name": "【LPL春季赛】3月26日 ES vs SN",
                                    "pic": "http://i0.hdslb.com/bfs/archive/a250069f78ed431eeed2bc7df7260a8c63da2092.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1SA411N7XF",
                                    "style": 0,
                                    "archive": {
                                        "aid": 332319133,
                                        "videos": 2,
                                        "tid": 171,
                                        "tname": "电子竞技",
                                        "copyright": 1,
                                        "pic": "http://i1.hdslb.com/bfs/archive/a250069f78ed431eeed2bc7df7260a8c63da2092.jpg",
                                        "title": "【LPL春季赛】3月26日 ES vs SN",
                                        "pubdate": 1616753430,
                                        "ctime": 1616753430,
                                        "desc": "【LPL春季赛】3月26日 ES vs SN",
                                        "state": 0,
                                        "duration": 6812,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 50329118,
                                            "name": "哔哩哔哩英雄联盟赛事",
                                            "face": "http://i0.hdslb.com/bfs/face/cb620bbb9071974f37843134875d472b47532a97.jpg"
                                        },
                                        "stat": {
                                            "aid": 332319133,
                                            "view": 121578,
                                            "danmaku": 901,
                                            "reply": 317,
                                            "favorite": 131,
                                            "coin": 236,
                                            "share": 283,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 3403,
                                            "dislike": 0
                                        },
                                        "dynamic": "#LPL##英雄联盟##LPL春季赛##2021LPL##电子竞技##ES##SN# 【LPL春季赛】3月26日 ES vs SN",
                                        "cid": 315475762,
                                        "dimension": {"width": 1920, "height": 1080, "rotate": 0},
                                        "bvid": "BV1SA411N7XF"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3451,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1614493800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688123,
                                    "contract_id": "rec_video",
                                    "pos_num": 3,
                                    "name": "【LPL春季赛】3月27日 TES vs WE",
                                    "pic": "http://i0.hdslb.com/bfs/archive/612a5bc80423af3e20d0376944bde605f863db87.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1wU4y1Y7Mc",
                                    "style": 0,
                                    "archive": {
                                        "aid": 672351922,
                                        "videos": 3,
                                        "tid": 171,
                                        "tname": "电子竞技",
                                        "copyright": 1,
                                        "pic": "http://i2.hdslb.com/bfs/archive/612a5bc80423af3e20d0376944bde605f863db87.jpg",
                                        "title": "【LPL春季赛】3月27日 TES vs WE",
                                        "pubdate": 1616847333,
                                        "ctime": 1616847333,
                                        "desc": "【LPL春季赛】3月27日 TES vs WE",
                                        "state": 0,
                                        "duration": 6472,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 0,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 50329118,
                                            "name": "哔哩哔哩英雄联盟赛事",
                                            "face": "http://i0.hdslb.com/bfs/face/cb620bbb9071974f37843134875d472b47532a97.jpg"
                                        },
                                        "stat": {
                                            "aid": 672351922,
                                            "view": 571126,
                                            "danmaku": 5108,
                                            "reply": 3366,
                                            "favorite": 664,
                                            "coin": 1103,
                                            "share": 644,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 9073,
                                            "dislike": 0
                                        },
                                        "dynamic": "#LPL##LPL春季赛##2021LPL##英雄联盟##电子竞技#【LPL春季赛】3月27日 TES vs WE",
                                        "cid": 315996005,
                                        "dimension": {"width": 1920, "height": 1080, "rotate": 0},
                                        "bvid": "BV1wU4y1Y7Mc"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3452,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1611914400,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688119,
                                    "contract_id": "rec_video",
                                    "pos_num": 4,
                                    "name": "【LPL春季赛】3月27日 TT vs OMG",
                                    "pic": "http://i0.hdslb.com/bfs/archive/fb04f85a59e20d4b14b2f2e250d9c58565dc6344.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV1cK4y1M7Dc",
                                    "style": 0,
                                    "archive": {
                                        "aid": 887330788,
                                        "videos": 4,
                                        "tid": 171,
                                        "tname": "电子竞技",
                                        "copyright": 1,
                                        "pic": "http://i0.hdslb.com/bfs/archive/fb04f85a59e20d4b14b2f2e250d9c58565dc6344.jpg",
                                        "title": "【LPL春季赛】3月27日 TT vs OMG",
                                        "pubdate": 1616839922,
                                        "ctime": 1616839922,
                                        "desc": "【LPL春季赛】3月27日 TT vs OMG",
                                        "state": 0,
                                        "duration": 9676,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 50329118,
                                            "name": "哔哩哔哩英雄联盟赛事",
                                            "face": "http://i0.hdslb.com/bfs/face/cb620bbb9071974f37843134875d472b47532a97.jpg"
                                        },
                                        "stat": {
                                            "aid": 887330788,
                                            "view": 70963,
                                            "danmaku": 237,
                                            "reply": 160,
                                            "favorite": 79,
                                            "coin": 154,
                                            "share": 492,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 2860,
                                            "dislike": 0
                                        },
                                        "dynamic": "#LPL##LPL春季赛##2021LPL##英雄联盟##电子竞技#【LPL春季赛】3月27日 TT vs OMG",
                                        "cid": 315939572,
                                        "dimension": {"width": 1920, "height": 1080, "rotate": 0},
                                        "bvid": "BV1cK4y1M7Dc"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3453,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1611914400,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }, {
                                    "id": 688121,
                                    "contract_id": "rec_video",
                                    "pos_num": 5,
                                    "name": "【LPL春季赛TOP5】第十周D6：河流之王攻守自如，萝莉暴走神鬼难当！",
                                    "pic": "http://i0.hdslb.com/bfs/archive/291df4ac88da09854ce885891e0b2d7831c0b944.jpg",
                                    "litpic": "",
                                    "url": "http://www.bilibili.com/video/BV14V411n7f7",
                                    "style": 0,
                                    "archive": {
                                        "aid": 417373256,
                                        "videos": 1,
                                        "tid": 171,
                                        "tname": "电子竞技",
                                        "copyright": 1,
                                        "pic": "http://i1.hdslb.com/bfs/archive/291df4ac88da09854ce885891e0b2d7831c0b944.jpg",
                                        "title": "【LPL春季赛TOP5】第十周D6：河流之王攻守自如，萝莉暴走神鬼难当！",
                                        "pubdate": 1616860256,
                                        "ctime": 1616860256,
                                        "desc": "【LPL春季赛TOP5】第十周D6：河流之王攻守自如，萝莉暴走神鬼难当！",
                                        "state": 0,
                                        "duration": 191,
                                        "rights": {
                                            "bp": 0,
                                            "elec": 0,
                                            "download": 0,
                                            "movie": 0,
                                            "pay": 0,
                                            "hd5": 0,
                                            "no_reprint": 1,
                                            "autoplay": 1,
                                            "ugc_pay": 0,
                                            "is_cooperation": 0,
                                            "ugc_pay_preview": 0,
                                            "no_background": 0
                                        },
                                        "owner": {
                                            "mid": 50329118,
                                            "name": "哔哩哔哩英雄联盟赛事",
                                            "face": "http://i0.hdslb.com/bfs/face/cb620bbb9071974f37843134875d472b47532a97.jpg"
                                        },
                                        "stat": {
                                            "aid": 417373256,
                                            "view": 87306,
                                            "danmaku": 127,
                                            "reply": 168,
                                            "favorite": 66,
                                            "coin": 382,
                                            "share": 598,
                                            "now_rank": 0,
                                            "his_rank": 0,
                                            "like": 5582,
                                            "dislike": 0
                                        },
                                        "dynamic": "#LPL春季赛##LPL##英雄联盟##电子竞技# 【LPL春季赛TOP5】第十周D6：河流之王攻守自如，萝莉暴走神鬼难当！",
                                        "cid": 316080383,
                                        "dimension": {"width": 1920, "height": 1080, "rotate": 0},
                                        "bvid": "BV14V411n7f7"
                                    },
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3454,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1611914400,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "3455": [{
                                    "id": 667627,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "哔哩哔哩电竞赛事中心",
                                    "pic": "http://i0.hdslb.com/bfs/feed-admin/563c74bf0dec75460eeffdda71fc3791913fcc5e.png",
                                    "litpic": "",
                                    "url": "https://www.bilibili.com/v/game/match",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429",
                                    "src_id": 3456,
                                    "area": 1,
                                    "is_ad_loc": false,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 1614070800,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "40": [{
                                    "id": 0,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "",
                                    "pic": "https://i0.hdslb.com/bfs/sycp/creative_img/202103/e96568f131af0501c023f8e61062a9c1.jpg",
                                    "litpic": "",
                                    "url": "https://product.suning.com/0000000000/12250989193.html",
                                    "style": 0,
                                    "is_ad": true,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "creative_id": 479258320870965248,
                                    "src_id": 41,
                                    "click_url": "https://e.cn.miaozhen.com/r/k=2225361\u0026p=7qRHg\u0026dx=__IPDX__\u0026rt=2\u0026pro=s\u0026ns=175.9.129.118\u0026ni=__IESID__\u0026v=__LOC__\u0026xa=__ADPLATFORM__\u0026tr=1617055429226q172a25a163a167q5761\u0026mo=3\u0026m0=__OPENUDID__\u0026m0a=__DUID__\u0026m1=__ANDROIDID1__\u0026m1a=__ANDROIDID__\u0026m2=__IMEI__\u0026m4=__AAID__\u0026m5=__IDFA__\u0026m6=__MAC1__\u0026m6a=__MAC__\u0026m11=__OAID__\u0026m14=__CAID__\u0026mn=__ANAME__\u0026o=https://product.suning.com/0000000000/12250989193.html",
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "CAAQABiAgKiZ9dyq0wYgACgAMB04KUIhMTYxNzA1NTQyOTIyNnExNzJhMjVhMTYzYTE2N3E1NzYxSOrkjoCIL1IG6ZW/5rKZWgbmuZbljZdiBuS4reWbvWgDcAB4gICAgJANgAEAiAGQhQGSAQ0xNzUuOS4xMjkuMTE4mgHxEmFsbDpkZWZhdWx0LGNwY1RhZ0ZpbHRlcjp1bmRlZmluZWQscHBjdHI6Y29uc3RhbnQsbm9fYWQ6dW5kZWZpbmVkLGJydXNoX2R1cDpkZWZhdWx0LGZkX3BjdHI6cmVhbHRpbWVfY3RyX3YyLGR5bl9jdHI6ZGVsdGEyLGR5bl9jdnI6bmV3Mix1ZnJhbWVfY3ZyOmJhc2UsY3ZyX3A6YnJ1c2hfYmFjazIsZGN2cmY6Y29uc3RhbnQsY3ZyX2Y6YmFjayxjcGE6YmFzZSxvY3B4VXY6cmVtYWluLG9jcHhSZWNhbGw6cmVjYWxsLFVWOnVuZGVmaW5lZCxoYXNoVVY6dW5kZWZpbmVkLHB2OkQsZmRfcmFuZG9tOmRlZmF1bHQsZmxvd19yYXRpbzpyMyxkbXBfYWdlOmJ1dmlkX2RtcCxuRmVkQmFjazpsb29zZSxxaWZlaTpjb2V1c19nbV8wMyxmaWx0ZXJPcHQ6b3Blbixpbm5lcl9lbmhhbmNlOmNsb3NlLFJTOmRwYV9jb250ZW50LGRwczpkZWZhdWx0LG9wZW5mbHluZXc6b3BlbixmbHlfcGN2cjpobSxmbHlfb2NwbTpub19lZSxmbHlfY3BhOnBpZHEsaDVfdjpjb21wYXJlLHBFTjpQUixzRkJydTozLGZkU0I6ZGVmYXVsdCx0aW1lRnJlcTpkZWZhdWx0LGN1Y286MTIwLHB1Y286ZHluYW1pYyx1dlRlc3Q6YTIsb2NwbVRocjpkZWZhdWx0LGRvd25ncmFkZTpub192MixkQWR4OmRlZmF1bHQsdXNlR3JwYzp0cnVlLG1lcmN5UGI6bmV3X3VuaXRfd2VpZ2h0LGZyZVM6dWVsb3NzX2NvZXVzLGNvYXJzZTpjb2Fyc2VfY3ZyX25ld2NvbnYsaGRldGFpbHM6YmFzZSxwcEI6c2hvdyxjcm93ZFM6RCxjb2xkUjpjb25zdGFudCxmbHlfdHJ1bnA6bW91dCxmbHlfdHJ1bnBsdXM6cHJlZCxidXBfY3BjOm9wZW4sc21hcnRiaWQ6ZGVmYXVsdCxmbHlfc21hcnRiaWQ6b3Blbl9kZWZhdWx0LGFsbEZsb3c6ZGVmYXVsdCxjcm93ZHNMb2c6ZW5hYmxlLGVjcG06ZGVmYXVsdCxwY3RyX2NwbTpjcG0scGN0cl9jb25zdGFudDpkZnQsZHluYW1pY19mbG93X2NvbnRyb2w6c3BsaXQgdGhlIGZsb3cgYnkgbWlkLG91dGVyQmVhdElubmVyOmRlZmF1bHQsb3V0ZXJRdWl0OmRlZmF1bHQsY29sZF9ib290X2V4cDpkZWZhdWx0LG50aF9icnVzaF9ldmVudDpkZWZhdWx0LGxvd19xdHlfY3JlYXRpdmU6bG93X3F0eSxlbmFibGVQYXJhbGxlbDp0cnVlLGxpbWl0X2FkeDpkZWZhdWx0LHNvcnRBZHg6c29ydEFkeF90cnVlLG9jcG1Ud29TdGFnZVBjdnJUaHJlc2hvbGRFeHA6ZGVmYXVsdCxwcFNCOm9wZW4sY3JlYXRpdmVGcmVxRmlsdGVyOmNsdXN0ZXIsYmxvY2tDb21tZW50OmRlZmF1bHQsb2NwbV9zdXBwb3J0Om9wZW5Db250ZW50VXBDb25maWdMYW1iZGEsZmx5X2NwbV9lY3BtOm9wZW4sbWV0OjMzNSxidWRnZXRfc21vb3RoX25ldzpjb25zdGFudCxwY0V4cGVyaW1lbnQ6cGNFeHBlcmltZW50RW5hYmxlLHBjcGN2cjpiYXNlLGVuYWJsZUFwcFN0b3JlUHJlbG9hZDplbmFibGUsY2Fzc2luaUNUUjpob3VybHksY2Fzc2luaUZlZWRzQ1ZSOmNvbW1tb24sY2Fzc2luaUV4cDpzbWFsbF9idWRnZXRfY2xvc2UsQ3JlYXRpdmVRdWFsaXR5OnJlbWFpbixydGFFeHA6Y2xvc2UsZ2lmX2V4cDpiYXNlLGlubGluZUV4cDpwbGFuQixwcm9ncmFtQ3JlYXRpdmU6ZmVlZGN0cixvcGVuQnVzaW5lc3NVcENwYzpvcGVuLGJyYW5kSW5mb0V4cDpkZWZhdWx0LGRwYTJTdHJhdGVneTpkZWZhdWx0LGJyYW5kQ2xvc2VQclNob3dBZDp0cnVlLGRwYTI6Y2xvc2VDcm93ZCxpbmRleF9vcHQ6b3BlbixpbmRleF9vcHRfdjI6b3BlbixmaWx0ZXJfZm9yd2FyZDphc19za2lwX2lubmVyX2V4cCxyZXNlcnZlX3ByaWNlOmdzcF9vbmx5X2RwYSxiZ1RhZzphbGwsdXNlQXM6b3BlbixidXZpZERtcFVzZXJQcm9maWxlRXhwOm9wZW4sYXJlYVJlcGxhY2U6ZGVmYXVsdCxoaXRfbmVidWxhX2luZGV4Om9wZW4sc2tpcEFjZ1ZpZGVvQ2F0ZWdvcnlGaWx0ZXI6Y2xvc2Usb2NweENvbnZlcnNpb2JGaWx0ZXI6b3BlbixyaXNrQ2F0ZWdvcnlGcmVxQ29udHJvbFVwZ3JhZGU6ZGVmYXVsdCxwZXJzb25hVGhpcmRTd2l0Y2g6ZGVmYXVsdCxtdWx0aV90ZW1wbGF0ZV9pZF9zZWxlY3Q6b3BlbixlbmFibGVfcmVkaXNfcHJlZml4Om9wZW4sdW5kZXJfZnJhbWVfdHJ1c3RfZnJlcTpiYXNlLG5pbnRoOm9wZW4sdW5kZXJfZnJhbWVfZWNwbV9leHA6YmFzZSx1c2VfaXBkYl9leHA6b3Blbixpbm5lcl9vdXRlcl9iaWRfZXhwOmV4cDUsZW5hYmxlRnJlcUFCOm9wZW4sRHluYW1pY1NjZW5lT2NweDpvcGVuLGNyZWF0aXZlUXVhbGl0eVVzZU5ld0ljb246b3BlbixEcGFDcmVhdGl2ZVN0cmF0ZWd5RXhwZXJpbWVudDp0aXRsZV9zdHJhdGVneV8xMDEsYXV0b19naWY6YmFzZSxzd2l0Y2hCc1BnUmVxUmF0aW86Y2xvc2UscGxheXBhZ2VfY2FyZHR5cGU6YmFzZSx1c2VBc1BnOmNsb3NlLGJlc3RDcmVhdGl2ZTpjb25zdGFudCxuRmVkQmFjazE6bG9vc2UsZEFkeDE6ZGVmYXVsdCxtaWRfYWE6ZXhwXzEscHZfYWE6ZXhwXzEsdXZfYWE6ZGVmYXVsdCxwbGF0Zm9ybTpkZWZhdWx0oAEAqAEAsgEgYB5WziV71SXxDFgObnG42M9DbOcfQQWJxjBF9mz8dbi6ATZodHRwczovL3Byb2R1Y3Quc3VuaW5nLmNvbS8wMDAwMDAwMDAwLzEyMjUwOTg5MTkzLmh0bWzCAQDSAQDYAWngAQDoAQDwAQD4AQCAAgCIAgC4AgDAAgDIAgDQAgDYAgDqAgDwAofqCvgCAIgDAZIDAKgDALADALgDAMIDAMgDIdIDSnsiMSI6IjQ3OTI1ODMyMDg3MDk2NTI0OCIsIjIiOiIyOSIsIjMiOiIyOSIsIjQiOiI2MyIsIjUiOiIxMDciLCI2IjoiMjlfMCJ94AMA6AMC8AMA+gMFb3RoZXKCBAludWxsOm51bGyIBACQBACYBACgBACqBAQIABAEsAQA",
                                    "title": "",
                                    "server_type": 1,
                                    "cm_mark": 1,
                                    "stime": 0,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "42": [{
                                    "id": 0,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "",
                                    "pic": "https://i0.hdslb.com/bfs/sycp/creative_img/202103/ac78edbf7419eebb33513d76321e5822.jpg",
                                    "litpic": "",
                                    "url": "https://mshare.tianyanqifu.com/redPacket?id=2c9afbd7782e6c8b01782f70641200b7\u0026channelCode=mkt_lb_1",
                                    "style": 0,
                                    "is_ad": true,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "creative_id": 479298066133417984,
                                    "src_id": 43,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "CAAQABiAgKjr0+Gz0wYgACgAMB04K0IhMTYxNzA1NTQyOTIyNnExNzJhMjVhMTYzYTE2N3E1NzYxSOrkjoCIL1IG6ZW/5rKZWgbmuZbljZdiBuS4reWbvWgDcAB4gICAgJANgAEAiAH4fJIBDTE3NS45LjEyOS4xMTiaAfESYWxsOmRlZmF1bHQsY3BjVGFnRmlsdGVyOnVuZGVmaW5lZCxwcGN0cjpjb25zdGFudCxub19hZDp1bmRlZmluZWQsYnJ1c2hfZHVwOmRlZmF1bHQsZmRfcGN0cjpyZWFsdGltZV9jdHJfdjIsZHluX2N0cjpkZWx0YTIsZHluX2N2cjpuZXcyLHVmcmFtZV9jdnI6YmFzZSxjdnJfcDpicnVzaF9iYWNrMixkY3ZyZjpjb25zdGFudCxjdnJfZjpiYWNrLGNwYTpiYXNlLG9jcHhVdjpyZW1haW4sb2NweFJlY2FsbDpyZWNhbGwsVVY6dW5kZWZpbmVkLGhhc2hVVjp1bmRlZmluZWQscHY6RCxmZF9yYW5kb206ZGVmYXVsdCxmbG93X3JhdGlvOnIzLGRtcF9hZ2U6YnV2aWRfZG1wLG5GZWRCYWNrOmxvb3NlLHFpZmVpOmNvZXVzX2dtXzAzLGZpbHRlck9wdDpvcGVuLGlubmVyX2VuaGFuY2U6Y2xvc2UsUlM6ZHBhX2NvbnRlbnQsZHBzOmRlZmF1bHQsb3BlbmZseW5ldzpvcGVuLGZseV9wY3ZyOmhtLGZseV9vY3BtOm5vX2VlLGZseV9jcGE6cGlkcSxoNV92OmNvbXBhcmUscEVOOlBSLHNGQnJ1OjMsZmRTQjpkZWZhdWx0LHRpbWVGcmVxOmRlZmF1bHQsY3VjbzoxMjAscHVjbzpkeW5hbWljLHV2VGVzdDphMixvY3BtVGhyOmRlZmF1bHQsZG93bmdyYWRlOm5vX3YyLGRBZHg6ZGVmYXVsdCx1c2VHcnBjOnRydWUsbWVyY3lQYjpuZXdfdW5pdF93ZWlnaHQsZnJlUzp1ZWxvc3NfY29ldXMsY29hcnNlOmNvYXJzZV9jdnJfbmV3Y29udixoZGV0YWlsczpiYXNlLHBwQjpzaG93LGNyb3dkUzpELGNvbGRSOmNvbnN0YW50LGZseV90cnVucDptb3V0LGZseV90cnVucGx1czpwcmVkLGJ1cF9jcGM6b3BlbixzbWFydGJpZDpkZWZhdWx0LGZseV9zbWFydGJpZDpvcGVuX2RlZmF1bHQsYWxsRmxvdzpkZWZhdWx0LGNyb3dkc0xvZzplbmFibGUsZWNwbTpkZWZhdWx0LHBjdHJfY3BtOmNwbSxwY3RyX2NvbnN0YW50OmRmdCxkeW5hbWljX2Zsb3dfY29udHJvbDpzcGxpdCB0aGUgZmxvdyBieSBtaWQsb3V0ZXJCZWF0SW5uZXI6ZGVmYXVsdCxvdXRlclF1aXQ6ZGVmYXVsdCxjb2xkX2Jvb3RfZXhwOmRlZmF1bHQsbnRoX2JydXNoX2V2ZW50OmRlZmF1bHQsbG93X3F0eV9jcmVhdGl2ZTpsb3dfcXR5LGVuYWJsZVBhcmFsbGVsOnRydWUsbGltaXRfYWR4OmRlZmF1bHQsc29ydEFkeDpzb3J0QWR4X3RydWUsb2NwbVR3b1N0YWdlUGN2clRocmVzaG9sZEV4cDpkZWZhdWx0LHBwU0I6b3BlbixjcmVhdGl2ZUZyZXFGaWx0ZXI6Y2x1c3RlcixibG9ja0NvbW1lbnQ6ZGVmYXVsdCxvY3BtX3N1cHBvcnQ6b3BlbkNvbnRlbnRVcENvbmZpZ0xhbWJkYSxmbHlfY3BtX2VjcG06b3BlbixtZXQ6MzM1LGJ1ZGdldF9zbW9vdGhfbmV3OmNvbnN0YW50LHBjRXhwZXJpbWVudDpwY0V4cGVyaW1lbnRFbmFibGUscGNwY3ZyOmJhc2UsZW5hYmxlQXBwU3RvcmVQcmVsb2FkOmVuYWJsZSxjYXNzaW5pQ1RSOmhvdXJseSxjYXNzaW5pRmVlZHNDVlI6Y29tbW1vbixjYXNzaW5pRXhwOnNtYWxsX2J1ZGdldF9jbG9zZSxDcmVhdGl2ZVF1YWxpdHk6cmVtYWluLHJ0YUV4cDpjbG9zZSxnaWZfZXhwOmJhc2UsaW5saW5lRXhwOnBsYW5CLHByb2dyYW1DcmVhdGl2ZTpmZWVkY3RyLG9wZW5CdXNpbmVzc1VwQ3BjOm9wZW4sYnJhbmRJbmZvRXhwOmRlZmF1bHQsZHBhMlN0cmF0ZWd5OmRlZmF1bHQsYnJhbmRDbG9zZVByU2hvd0FkOnRydWUsZHBhMjpjbG9zZUNyb3dkLGluZGV4X29wdDpvcGVuLGluZGV4X29wdF92MjpvcGVuLGZpbHRlcl9mb3J3YXJkOmFzX3NraXBfaW5uZXJfZXhwLHJlc2VydmVfcHJpY2U6Z3NwX29ubHlfZHBhLGJnVGFnOmFsbCx1c2VBczpvcGVuLGJ1dmlkRG1wVXNlclByb2ZpbGVFeHA6b3BlbixhcmVhUmVwbGFjZTpkZWZhdWx0LGhpdF9uZWJ1bGFfaW5kZXg6b3Blbixza2lwQWNnVmlkZW9DYXRlZ29yeUZpbHRlcjpjbG9zZSxvY3B4Q29udmVyc2lvYkZpbHRlcjpvcGVuLHJpc2tDYXRlZ29yeUZyZXFDb250cm9sVXBncmFkZTpkZWZhdWx0LHBlcnNvbmFUaGlyZFN3aXRjaDpkZWZhdWx0LG11bHRpX3RlbXBsYXRlX2lkX3NlbGVjdDpvcGVuLGVuYWJsZV9yZWRpc19wcmVmaXg6b3Blbix1bmRlcl9mcmFtZV90cnVzdF9mcmVxOmJhc2UsbmludGg6b3Blbix1bmRlcl9mcmFtZV9lY3BtX2V4cDpiYXNlLHVzZV9pcGRiX2V4cDpvcGVuLGlubmVyX291dGVyX2JpZF9leHA6ZXhwNSxlbmFibGVGcmVxQUI6b3BlbixEeW5hbWljU2NlbmVPY3B4Om9wZW4sY3JlYXRpdmVRdWFsaXR5VXNlTmV3SWNvbjpvcGVuLERwYUNyZWF0aXZlU3RyYXRlZ3lFeHBlcmltZW50OnRpdGxlX3N0cmF0ZWd5XzEwMSxhdXRvX2dpZjpiYXNlLHN3aXRjaEJzUGdSZXFSYXRpbzpjbG9zZSxwbGF5cGFnZV9jYXJkdHlwZTpiYXNlLHVzZUFzUGc6Y2xvc2UsYmVzdENyZWF0aXZlOmNvbnN0YW50LG5GZWRCYWNrMTpsb29zZSxkQWR4MTpkZWZhdWx0LG1pZF9hYTpleHBfMSxwdl9hYTpleHBfMSx1dl9hYTpkZWZhdWx0LHBsYXRmb3JtOmRlZmF1bHSgAQCoAQCyASBc04K4xpiC/VXF1yzh4mp8fOHdONo6TC98KojeowpzaroBYWh0dHBzOi8vbXNoYXJlLnRpYW55YW5xaWZ1LmNvbS9yZWRQYWNrZXQ/aWQ9MmM5YWZiZDc3ODJlNmM4YjAxNzgyZjcwNjQxMjAwYjcmY2hhbm5lbENvZGU9bWt0X2xiXzHCAQDSAQDYAWngAQDoAQDwAQD4AQCAAgCIAgC4AgDAAgDIAgDQAgDYAgDqAgDwAuv3CvgCAIgDAZIDAKgDALADALgDAMIDAMgDIdIDSnsiMSI6IjQ3OTI5ODA2NjEzMzQxNzk4NCIsIjIiOiIyOSIsIjMiOiIyOSIsIjQiOiI2MyIsIjUiOiIxMDciLCI2IjoiMjlfMCJ94AMA6AMC8AMA+gMFb3RoZXKCBAludWxsOm51bGyIBACQBACYBACgBACqBAQIABAEsAQA",
                                    "title": "",
                                    "server_type": 1,
                                    "cm_mark": 1,
                                    "stime": 0,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": false
                                }],
                                "44": [{
                                    "id": 0,
                                    "contract_id": "",
                                    "pos_num": 1,
                                    "name": "",
                                    "pic": "https://static.hdslb.com/images/transparent.gif",
                                    "litpic": "",
                                    "url": "",
                                    "style": 0,
                                    "agency": "",
                                    "label": "",
                                    "intro": "",
                                    "creative_type": 0,
                                    "request_id": "1617055429226q172a25a163a167q5761",
                                    "src_id": 45,
                                    "area": 1,
                                    "is_ad_loc": true,
                                    "ad_cb": "",
                                    "title": "",
                                    "server_type": 0,
                                    "cm_mark": 0,
                                    "stime": 0,
                                    "mid": "26119890",
                                    "activity_type": 0,
                                    "epid": 0,
                                    "season": null,
                                    "room": null,
                                    "sub_title": "",
                                    "ad_desc": "",
                                    "adver_name": "",
                                    "null_frame": true
                                }]
                            }, "message": "0"
                        }
                })
        }
    }
}

// 获取推荐位数据
export const getRecommend = (query = {}, context = {}) => {
    const cookie = isClient ? document.cookie : context && context.cookie
    const config = {
        url: `${domain}/x/web-interface/index/top/rcmd`,
        query,
        withCredentials: true,
    }
    if (!isClient) {
        config.headers = {
            cookie: cookie || '',
            'X-BACKEND-BILI-REAL-IP': context && context.ip || '',
        }
        config.sUrl = context.surl && context.surl['web.interface'] || ''
        config.encode = true
    }
    // return axios(config)
    return {
        then(f) {
            f(
                {
                    data: {
                        "code": 0, "message": "0", "ttl": 1, "data": {
                            "item": [{
                                "id": 714852141,
                                "bvid": "BV1bX4y1G7n5",
                                "uri": "https://www.bilibili.com/video/BV1bX4y1G7n5",
                                "pic": "http://i2.hdslb.com/bfs/archive/81bf34ce00bb148739bd9d27defdcacece78d1a5.jpg",
                                "title": "【原神/风物之歌】3个甘雨为你演奏《梦里韶光》",
                                "duration": 56,
                                "owner": {
                                    "mid": 2765893,
                                    "name": "恰空PurrLude",
                                    "face": "http://i1.hdslb.com/bfs/face/69756c667355d24e8a24dd1f396fdd53dee0a4b4.jpg"
                                },
                                "stat": {"view": 21745},
                            }, {
                                "id": 459767333,
                                "bvid": "BV1R5411P7uF",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1R5411P7uF",
                                "pic": "http://i1.hdslb.com/bfs/archive/c84fcbcb84cc8cb52802a21adda932cdf97608d8.jpg",
                                "title": "保大还是保小？医生被患者家属告上法庭？",
                                "duration": 667,
                                "owner": {
                                    "mid": 476853952,
                                    "name": "协和整形肖一丁",
                                    "face": "http://i1.hdslb.com/bfs/face/61e43cdad295e9d2357c4c6ed8fad1937df94488.jpg"
                                },
                                "stat": {"view": 134242},
                                "av_feature": "{\"ctr\":0.01313,\"wdlks\":0.172134,\"multi_score_0\":0.066819,\"multi_score_1\":0.050315,\"multi_score_2\":0.003749,\"multi_score_3\":0.019669,\"multi_score_4\":0.032953,\"negfdb\":0.0,\"rankscore\":0.226023,\"av_play\":133865,\"av_like\":17266,\"av_coin\":13667,\"src_flag\":0,\"av_feature\":\"|d 1 |v_cl 9 |v_bl 9 |v_fl 9 |matchtype 53$15$9 |real_matchtype 5$2 |source_len 3 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 0 |dn_m_k_w 0.000000 |ysession_state no_click_y |dr_class_match 1_0 \"}"
                            }, {
                                "id": 629852251,
                                "bvid": "BV1ob4y1Q7HE",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1ob4y1Q7HE",
                                "pic": "http://i0.hdslb.com/bfs/archive/d8e65118de02cd6adc00abea06448ad8657c2e37.jpg",
                                "title": "无内鬼？新高度！来点剧情笑话！【明日方舟吐槽/彩六剧情篇/第二期】",
                                "duration": 490,
                                "owner": {
                                    "mid": 9253594,
                                    "name": "拔旗",
                                    "face": "http://i1.hdslb.com/bfs/face/cca139677938c374007c0000a6adfd39da91dab0.jpg"
                                },
                                "stat": {"view": 49850},
                                "av_feature": "{\"ctr\":0.045617,\"wdlks\":0.047575,\"multi_score_0\":0.022168,\"multi_score_1\":0.011948,\"multi_score_2\":0.000899,\"multi_score_3\":0.006643,\"multi_score_4\":0.015754,\"negfdb\":0.0,\"rankscore\":0.217026,\"av_play\":47851,\"av_like\":8248,\"av_coin\":1542,\"src_flag\":0,\"av_feature\":\"|d 1 |v_cl 9 |v_bl 8 |v_fl 9 |matchtype 27 |real_matchtype 1 |source_len 1 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 5 |dn_m_k_w 0.333333 |m_k_word 手机游戏 明日方舟 打卡挑战 必剪创作 游戏知识分享官 |ysession_state no_click_y |dr_class_match 1_0 \"}"
                            }, {
                                "id": 502021073,
                                "bvid": "BV1HN411Q7fG",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1HN411Q7fG",
                                "pic": "http://i1.hdslb.com/bfs/archive/7bd211db16a5b94b3b7ff2a0e6a950f31b90dacd.jpg",
                                "title": "从此，背单词是另一个故事 | 拯救过众多“零基础”考生的单词记忆秘诀",
                                "duration": 1898,
                                "owner": {
                                    "mid": 373051665,
                                    "name": "宇哥带你上王者",
                                    "face": "http://i0.hdslb.com/bfs/face/94965fe5937312475ee1e088b6016d22c1549ea5.jpg"
                                },
                                "stat": {"view": 80827},
                                "av_feature": "{\"ctr\":0.01473,\"wdlks\":0.118968,\"multi_score_0\":0.044112,\"multi_score_1\":0.027398,\"multi_score_2\":0.003336,\"multi_score_3\":0.096962,\"multi_score_4\":0.061622,\"negfdb\":0.0,\"rankscore\":0.175246,\"av_play\":80682,\"av_like\":5891,\"av_coin\":3179,\"src_flag\":0,\"av_feature\":\"|d 4 |v_cl 9 |v_bl 8 |v_fl 9 |matchtype 6 |real_matchtype 1 |source_len 1 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 0 |dn_m_k_w 0.000000 |ysession_state no_click_y |dr_class_match 1_0 \"}"
                            }, {
                                "id": 587219175,
                                "bvid": "BV1yB4y1A7MZ",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1yB4y1A7MZ",
                                "pic": "http://i1.hdslb.com/bfs/archive/c78558b1f7fac1e1d1058786e400bd2f7c12fc20.jpg",
                                "title": "最 后 の 进 化",
                                "duration": 136,
                                "owner": {
                                    "mid": 15232589,
                                    "name": "白木哒哒哒",
                                    "face": "http://i2.hdslb.com/bfs/face/f29e84363d72caadd8b48decaf826047f7f3f289.jpg"
                                },
                                "stat": {"view": 475608},
                                "av_feature": "{\"ctr\":0.040363,\"wdlks\":0.040585,\"multi_score_0\":0.014651,\"multi_score_1\":0.011905,\"multi_score_2\":0.002833,\"multi_score_3\":0.007783,\"multi_score_4\":0.033658,\"negfdb\":0.0,\"rankscore\":0.163814,\"av_play\":463165,\"av_like\":49066,\"av_coin\":12852,\"src_flag\":0,\"av_feature\":\"|d 3 |v_cl 9 |v_bl 9 |v_fl 9 |matchtype 16 |real_matchtype 4 |source_len 1 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 4 |dn_m_k_w 0.266667 |m_k_word 手书 手机游戏 明日方舟 必剪创作 |ysession_state no_click_y |dr_class_match 0_0 \"}"
                            }, {
                                "id": 332338253,
                                "bvid": "BV1KA411K7or",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1KA411K7or",
                                "pic": "http://i0.hdslb.com/bfs/archive/13f03d55a57901b9e64cef4bf59b6d55401d14ff.jpg",
                                "title": "【自制动画】坏艾伦",
                                "duration": 43,
                                "owner": {
                                    "mid": 52955639,
                                    "name": "巴比伦塔1",
                                    "face": "http://i2.hdslb.com/bfs/face/351ecdeef4e220045cffbfcfa3400945e2641c36.jpg"
                                },
                                "stat": {"view": 1409508},
                                "av_feature": "{\"ctr\":0.007226,\"wdlks\":0.194686,\"multi_score_0\":0.062568,\"multi_score_1\":0.058654,\"multi_score_2\":0.011762,\"multi_score_3\":0.062284,\"multi_score_4\":0.015062,\"negfdb\":0.0,\"rankscore\":0.14069,\"av_play\":1378698,\"av_like\":127050,\"av_coin\":89306,\"src_flag\":0,\"av_feature\":\"|d 2 |v_cl 9 |v_bl 9 |v_fl 9 |matchtype 53$15$16 |real_matchtype 5$2$4 |source_len 3 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 2 |dn_m_k_w 0.133333 |m_k_word 手书 打卡挑战 |ysession_state no_click_y |dr_class_match 0_0 \"}"
                            }, {
                                "id": 459799860,
                                "bvid": "BV1P5411N7U7",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1P5411N7U7",
                                "pic": "http://i1.hdslb.com/bfs/archive/148d849007f6b3d611e62912d1d69727fbbaf5d4.jpg",
                                "title": "欧美金曲《Traveling Light》每次旋律一响，疲惫的心情就释怀了",
                                "duration": 208,
                                "owner": {
                                    "mid": 519861690,
                                    "name": "英文经典歌",
                                    "face": "http://i0.hdslb.com/bfs/face/50e9003be1c28aa5003507efad5ab0e0db447b88.jpg"
                                },
                                "stat": {"view": 251075},
                                "av_feature": "{\"ctr\":0.021192,\"wdlks\":0.05834,\"multi_score_0\":0.020659,\"multi_score_1\":0.01443,\"multi_score_2\":0.00262,\"multi_score_3\":0.041478,\"multi_score_4\":0.016155,\"negfdb\":0.0,\"rankscore\":0.123637,\"av_play\":249290,\"av_like\":8464,\"av_coin\":3825,\"src_flag\":0,\"av_feature\":\"|d 2 |v_cl 9 |v_bl 7 |v_fl 9 |matchtype 9 |real_matchtype 2 |source_len 1 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 0 |dn_m_k_w 0.000000 |ysession_state no_click_y |dr_class_match 0_0 \"}"
                            }, {
                                "id": 887331114,
                                "bvid": "BV1cK4y1M7xi",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1cK4y1M7xi",
                                "pic": "http://i2.hdslb.com/bfs/archive/0b1560d04efbd9d79eed59cb894f5c802f425478.jpg",
                                "title": "大家好 我就随便唱唱ヴァンパイア",
                                "duration": 99,
                                "owner": {
                                    "mid": 666726801,
                                    "name": "勺Shaun",
                                    "face": "http://i0.hdslb.com/bfs/face/491cdb176f5bb75664b2cfedb89179726b01c4e6.jpg"
                                },
                                "stat": {"view": 61767},
                                "av_feature": "{\"ctr\":0.010771,\"wdlks\":0.109621,\"multi_score_0\":0.04024,\"multi_score_1\":0.030197,\"multi_score_2\":0.002217,\"multi_score_3\":0.042716,\"multi_score_4\":0.042133,\"negfdb\":0.0,\"rankscore\":0.118083,\"av_play\":61083,\"av_like\":7080,\"av_coin\":2827,\"src_flag\":0,\"av_feature\":\"|d 1 |v_cl 9 |v_bl 6 |v_fl 9 |matchtype 53$15$9$6 |real_matchtype 5$2$1 |source_len 3 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 1 |dn_m_k_w 0.066667 |m_k_word 音乐 |ysession_state no_click_y |dr_class_match 1_0 \"}"
                            }, {
                                "id": 844763218,
                                "bvid": "BV1954y187co",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1954y187co",
                                "pic": "http://i2.hdslb.com/bfs/archive/f38b8862184be0980033caf584d619af30373dba.jpg",
                                "title": "世界四大纸飞机之DC-03，世界上最好的纸飞机",
                                "duration": 203,
                                "owner": {
                                    "mid": 20801168,
                                    "name": "乐折纸",
                                    "face": "http://i0.hdslb.com/bfs/face/885dd5ed261119592fb9dc849c0e30a3c9ac562d.jpg"
                                },
                                "stat": {"view": 59890},
                                "av_feature": "{\"ctr\":0.016444,\"wdlks\":0.058067,\"multi_score_0\":0.017413,\"multi_score_1\":0.014911,\"multi_score_2\":0.001225,\"multi_score_3\":0.052924,\"multi_score_4\":0.024651,\"negfdb\":0.0,\"rankscore\":0.095488,\"av_play\":58876,\"av_like\":2322,\"av_coin\":899,\"src_flag\":0,\"av_feature\":\"|d 2 |v_cl 9 |v_bl 5 |v_fl 9 |matchtype 53$9 |real_matchtype 5$2 |source_len 2 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 0 |dn_m_k_w 0.000000 |ysession_state no_click_y |dr_class_match 0_0 \"}"
                            }, {
                                "id": 417283986,
                                "bvid": "BV1xV411e7zD",
                                "goto": "av",
                                "uri": "https://www.bilibili.com/video/BV1xV411e7zD",
                                "pic": "http://i0.hdslb.com/bfs/archive/fbacc921035183adaa20fd3ee012d3e7f2a28960.jpg",
                                "title": "双人电竞书房桌面大改造！情侣网吧就在这家「桌面改造计划vol.2」",
                                "duration": 1012,
                                "owner": {
                                    "mid": 13839125,
                                    "name": "字幕君GOUBA",
                                    "face": "http://i2.hdslb.com/bfs/face/4ee7646eb7285599835c88dedbaf2e9600e6873c.jpg"
                                },
                                "stat": {"view": 51519},
                                "av_feature": "{\"ctr\":0.010434,\"wdlks\":0.090991,\"multi_score_0\":0.03602,\"multi_score_1\":0.023915,\"multi_score_2\":0.005492,\"multi_score_3\":0.030208,\"multi_score_4\":0.046327,\"negfdb\":0.0,\"rankscore\":0.094942,\"av_play\":50881,\"av_like\":5843,\"av_coin\":5217,\"src_flag\":0,\"av_feature\":\"|d 0 |v_cl 9 |v_bl 8 |v_fl 9 |matchtype 53 |real_matchtype 5 |source_len 1 |nonclick_show_region_num 0 |nonclick_show_tag_num 0 |m_k_w 0 |dn_m_k_w 0.000000 |ysession_state no_click_y |dr_class_match 0_0 \"}"
                            }],
                            "user_feature": "{\"enter_rank\":1500,\"is_fallback\":0,\"active_days\":30}",
                            "abtest": {"group": "b"}
                        }
                    }
                }
            )
        }
    }
}

// 获取在线人数 & 最新投稿数
export const getOnline = () => {
    return axios({
        url: '//api.bilibili.com/x/web-interface/online'
    })
}

// 获取分区楼层视频卡片数据
export const getRegion = (query) => {
    return axios({
      url: '/api/zoning/region/dynamic',
      query: query
    })
}

// 获取分区楼层视频卡片数据（最新投稿）
export const getRegionLatest = (query) => {
    return axios({
        url: '//api.bilibili.com/x/web-interface/information',
        query: query
    })
}

// 获取分区楼层排行榜数据
export const getRank = (query) => {
    return axios({
      url: '/api/zoning/region/ranking',
      query: query
    })
}

// 获取番剧和国创timeline
export const getTimeline = (query) => {
    return {
        then(f) {
            f(
                {
                    data:
                        {
                            "code": 0, "message": "success", "result": {
                                "latest": [{
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/ef9e96a13766c05103778d3746d569026b62e1c9.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 374391,
                                    "pub_index": "第12话",
                                    "pub_time": "00:45",
                                    "pub_ts": 1617122700,
                                    "published": 1,
                                    "season_id": 36288,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/7f1953a217be2e8df8d6223d2eeeaf3b94243e01.png",
                                    "title": "世界魔女出发！"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/48df0069b6b95d2f625515d7b956e2ce89609985.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 374379,
                                    "pub_index": "第12话",
                                    "pub_time": "00:30",
                                    "pub_ts": 1617121800,
                                    "published": 1,
                                    "season_id": 36287,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/60e49a0c9f70621825087d48f9074dda4f338ba6.png",
                                    "title": "文豪野犬 汪！"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/1c1132fe39bec7d88f62c28d703a095c60b4b072.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 374012,
                                    "pub_index": "第36话",
                                    "pub_time": "23:30",
                                    "pub_ts": 1617118200,
                                    "published": 1,
                                    "season_id": 36170,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/309651136aa074246e76a00d437519434520f1a6.png",
                                    "title": "关于我转生变成史莱姆这档事 第二季"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/42fa93fc553d97276812d051cae208c6be414ca6.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 395768,
                                    "pub_index": "第48.5话",
                                    "pub_time": "18:30",
                                    "pub_ts": 1617100200,
                                    "published": 1,
                                    "season_id": 33086,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f218be1ed65cc6a662c136d3f992892284c9def3.png",
                                    "title": "闇影詩章（僅限台灣地區）"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/aecbaaf4e3e36a2796684c2eff8ceb9b0f247c6d.jpg",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 397051,
                                    "pub_index": "第170话",
                                    "pub_time": "18:25",
                                    "pub_ts": 1617099900,
                                    "published": 1,
                                    "season_id": 6422,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/1d703634cd3ee35b625bf882f27289db301cae63.jpg",
                                    "title": "黑色四叶草"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/42fa93fc553d97276812d051cae208c6be414ca6.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 395653,
                                    "pub_index": "第48.5话",
                                    "pub_time": "17:55",
                                    "pub_ts": 1617098100,
                                    "published": 1,
                                    "season_id": 32916,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/31220048e2326b8190752b7f3575b4eca5ceb231.png",
                                    "title": "影之诗"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/8fbd44351aa72f4e837d7143a6f937908223cd57.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 375011,
                                    "pub_index": "第12话",
                                    "pub_time": "02:05",
                                    "pub_ts": 1617041100,
                                    "published": 1,
                                    "season_id": 37568,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/649db28c6762ab821b90710c6681ddb9aa7f7427.png",
                                    "title": "来冲浪吧！！美少年！！"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/0212baa8898d0c819c7fb84015e95b8fca621435.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 341098,
                                    "pub_index": "第25话",
                                    "pub_time": "01:35",
                                    "pub_ts": 1617039300,
                                    "published": 1,
                                    "season_id": 34423,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f68e9476bce5c882201a79e9f46c99085e217080.png",
                                    "title": "阿松 第三季"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/098d58fef696ce295f19878b6035214abece824f.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 378384,
                                    "pub_index": "第12话",
                                    "pub_time": "00:20",
                                    "pub_ts": 1617034800,
                                    "published": 1,
                                    "season_id": 37498,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/fc9051dbb2f876d9a54baa7bf40260ba53406587.png",
                                    "title": "碧蓝航线：微速前行！"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/99aa939d399965129d8d0c50687f0e61f9f2bacd.jpg",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 374341,
                                    "pub_index": "第12话",
                                    "pub_time": "00:10",
                                    "pub_ts": 1617034200,
                                    "published": 1,
                                    "season_id": 33059,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ebedf46ce440766bfba573be362a6d1175c21372.jpg",
                                    "title": "厨神小当家2（中配）"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/99aa939d399965129d8d0c50687f0e61f9f2bacd.jpg",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 374329,
                                    "pub_index": "第12话",
                                    "pub_time": "00:10",
                                    "pub_ts": 1617034200,
                                    "published": 1,
                                    "season_id": 34422,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/771f7e80ef71b3844e5ad5c0a3c783c85c475ae2.png",
                                    "title": "厨神小当家2"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/c87869bc63883138e9f561a7c303284f6ed1dc89.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 375012,
                                    "pub_index": "第13话",
                                    "pub_time": "23:00",
                                    "pub_ts": 1617030000,
                                    "published": 1,
                                    "season_id": 36579,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/d8e2a0adc75fbc7a6c66758d52218772d66c4f29.jpg",
                                    "title": "赛马娘 第二季"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/0a5a1d26b9f63c7295723ed781dbd7ab160d66f6.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 394575,
                                    "pub_index": "第4话~第6话",
                                    "pub_time": "20:56",
                                    "pub_ts": 1617022560,
                                    "published": 1,
                                    "season_id": 38339,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/5a05c7506609a1ae2aa077b4851640ddb6286c19.png",
                                    "title": "地球先锋队（中配版）"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/0a5a1d26b9f63c7295723ed781dbd7ab160d66f6.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 394574,
                                    "pub_index": "第2话~第3话",
                                    "pub_time": "20:55",
                                    "pub_ts": 1617022500,
                                    "published": 1,
                                    "season_id": 38339,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/5a05c7506609a1ae2aa077b4851640ddb6286c19.png",
                                    "title": "地球先锋队（中配版）"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/fa7f7fca3bccf564060bedff3e81f53db14dd9ea.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 373440,
                                    "pub_index": "第50话",
                                    "pub_time": "07:05",
                                    "pub_ts": 1616972700,
                                    "published": 1,
                                    "season_id": 33073,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/0461fa20c8bb42c31f899246facc076d01279fa4.png",
                                    "title": "女学。～圣女斯克威尔学院～"
                                }, {
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/3ec497853b0045ee7099d1e4d4a00552ea3aa12a.png",
                                    "delay": 0,
                                    "delay_id": 0,
                                    "delay_index": "",
                                    "delay_reason": "",
                                    "episode_id": 374728,
                                    "pub_index": "第12话",
                                    "pub_time": "01:35",
                                    "pub_ts": 1616952900,
                                    "published": 1,
                                    "season_id": 36204,
                                    "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/78040fac01344efbdc011389005d3711fddb4628.png",
                                    "title": "悠哉日常大王 第三季"
                                }], "timeline": [{
                                    "date": "3-28",
                                    "date_ts": 1616860800,
                                    "day_of_week": 7,
                                    "episodes": [{
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/0fea32875a9c2d20549c95c5549af077caeed30a.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 373987,
                                        "pub_index": "第12话",
                                        "pub_time": "02:00",
                                        "pub_ts": 1616868000,
                                        "published": 1,
                                        "season_id": 36286,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/4a090a0b22d5dd7336c68034c0e45b007169d728.png",
                                        "title": "怪病医拉姆尼"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/13307ebb99ba3c64f12772c289846809f6b3aa1c.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374692,
                                        "pub_index": "第11话",
                                        "pub_time": "02:30",
                                        "pub_ts": 1616869800,
                                        "published": 1,
                                        "season_id": 36211,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/b2573e85941a805cf323cbf7c38460a23875c469.png",
                                        "title": "无限滑板 / SK8 the Infinity"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/4e6c505b1b1631c542ea76c3da1ce08bb43faad6.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 380832,
                                        "pub_index": "第144话",
                                        "pub_time": "10:00",
                                        "pub_ts": 1616896800,
                                        "published": 1,
                                        "season_id": 23841,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/5c2f289eac0ec49bc5e6b9483f4191c42ffa2254.jpg",
                                        "title": "美妙☆频道"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/a50fdc5044b16ab7f713f59ded72b4bc3b2d1446.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 317603,
                                        "pub_index": "第47话",
                                        "pub_time": "10:30",
                                        "pub_ts": 1616898600,
                                        "published": 1,
                                        "season_id": 33045,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/c6f83b8948bffa135f533448be26ec15f5ddb3c8.jpg",
                                        "title": "甜梦猫"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/71d54cae830d32a5af776dcc46632146fbdba868.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 396076,
                                        "pub_index": "第192话",
                                        "pub_time": "17:30",
                                        "pub_ts": 1616923800,
                                        "published": 1,
                                        "season_id": 5978,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/3121473d5dd03a9bcccb8490034207e724e731b3.jpg",
                                        "title": "博人传 火影忍者新时代"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/ffc7ef5483d8eaa0a0579609b006bc07c4e9411d.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 380236,
                                        "pub_index": "第147话",
                                        "pub_time": "18:00",
                                        "pub_ts": 1616925600,
                                        "published": 1,
                                        "season_id": 23882,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/4143c286982fd8f9ad467af7b6e4a74aaee1c026.jpg",
                                        "title": "智龙迷城"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/ef10d28a7f875528c38702ac9d5ba03fee3d4eda.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 395958,
                                        "pub_index": "第12话",
                                        "pub_time": "20:00",
                                        "pub_ts": 1616932800,
                                        "published": 1,
                                        "season_id": 38254,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/5c8d117e799847770bd5357596ee0d3b5191a99a.png",
                                        "title": "忧国的莫里亚蒂 后半"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/3557b7261e17dd4d4a1e5f1f102f0f3cbecd10a0.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 373999,
                                        "pub_index": "第12话",
                                        "pub_time": "22:30",
                                        "pub_ts": 1616941800,
                                        "published": 1,
                                        "season_id": 36241,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/91892978edda2615108aab8443a5e2e96ea2f188.png",
                                        "title": "怪物事变"
                                    }],
                                    "is_today": 0
                                }, {
                                    "date": "3-29",
                                    "date_ts": 1616947200,
                                    "day_of_week": 1,
                                    "episodes": [{
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/3926335134e162b6b3f12b4808265e4b14753152.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374704,
                                        "pub_index": "第12话",
                                        "pub_time": "00:30",
                                        "pub_ts": 1616949000,
                                        "published": 1,
                                        "season_id": 36290,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f50ff6e2f2e9604c2c58cd2b44b9672964bd0add.png",
                                        "title": "偶像荣耀/IDOLY PRIDE"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/3ec497853b0045ee7099d1e4d4a00552ea3aa12a.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374728,
                                        "pub_index": "第12话",
                                        "pub_time": "01:35",
                                        "pub_ts": 1616952900,
                                        "published": 1,
                                        "season_id": 36204,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/78040fac01344efbdc011389005d3711fddb4628.png",
                                        "title": "悠哉日常大王 第三季"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/fa7f7fca3bccf564060bedff3e81f53db14dd9ea.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 373440,
                                        "pub_index": "第50话",
                                        "pub_time": "07:05",
                                        "pub_ts": 1616972700,
                                        "published": 1,
                                        "season_id": 33073,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/0461fa20c8bb42c31f899246facc076d01279fa4.png",
                                        "title": "女学。～圣女斯克威尔学院～"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/0a5a1d26b9f63c7295723ed781dbd7ab160d66f6.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 394574,
                                        "pub_index": "第2话~第3话",
                                        "pub_time": "20:55",
                                        "pub_ts": 1617022500,
                                        "published": 1,
                                        "season_id": 38339,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/5a05c7506609a1ae2aa077b4851640ddb6286c19.png",
                                        "title": "地球先锋队（中配版）"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/0a5a1d26b9f63c7295723ed781dbd7ab160d66f6.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 394575,
                                        "pub_index": "第4话~第6话",
                                        "pub_time": "20:56",
                                        "pub_ts": 1617022560,
                                        "published": 1,
                                        "season_id": 38339,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/5a05c7506609a1ae2aa077b4851640ddb6286c19.png",
                                        "title": "地球先锋队（中配版）"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/c87869bc63883138e9f561a7c303284f6ed1dc89.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 375012,
                                        "pub_index": "第13话",
                                        "pub_time": "23:00",
                                        "pub_ts": 1617030000,
                                        "published": 1,
                                        "season_id": 36579,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/d8e2a0adc75fbc7a6c66758d52218772d66c4f29.jpg",
                                        "title": "赛马娘 第二季"
                                    }],
                                    "is_today": 0
                                }, {
                                    "date": "3-30",
                                    "date_ts": 1617033600,
                                    "day_of_week": 2,
                                    "episodes": [{
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/99aa939d399965129d8d0c50687f0e61f9f2bacd.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374341,
                                        "pub_index": "第12话",
                                        "pub_time": "00:10",
                                        "pub_ts": 1617034200,
                                        "published": 1,
                                        "season_id": 33059,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ebedf46ce440766bfba573be362a6d1175c21372.jpg",
                                        "title": "厨神小当家2（中配）"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/99aa939d399965129d8d0c50687f0e61f9f2bacd.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374329,
                                        "pub_index": "第12话",
                                        "pub_time": "00:10",
                                        "pub_ts": 1617034200,
                                        "published": 1,
                                        "season_id": 34422,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/771f7e80ef71b3844e5ad5c0a3c783c85c475ae2.png",
                                        "title": "厨神小当家2"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/098d58fef696ce295f19878b6035214abece824f.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 378384,
                                        "pub_index": "第12话",
                                        "pub_time": "00:20",
                                        "pub_ts": 1617034800,
                                        "published": 1,
                                        "season_id": 37498,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/fc9051dbb2f876d9a54baa7bf40260ba53406587.png",
                                        "title": "碧蓝航线：微速前行！"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/0212baa8898d0c819c7fb84015e95b8fca621435.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 341098,
                                        "pub_index": "第25话",
                                        "pub_time": "01:35",
                                        "pub_ts": 1617039300,
                                        "published": 1,
                                        "season_id": 34423,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f68e9476bce5c882201a79e9f46c99085e217080.png",
                                        "title": "阿松 第三季"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/8fbd44351aa72f4e837d7143a6f937908223cd57.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 375011,
                                        "pub_index": "第12话",
                                        "pub_time": "02:05",
                                        "pub_ts": 1617041100,
                                        "published": 1,
                                        "season_id": 37568,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/649db28c6762ab821b90710c6681ddb9aa7f7427.png",
                                        "title": "来冲浪吧！！美少年！！"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/42fa93fc553d97276812d051cae208c6be414ca6.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 395653,
                                        "pub_index": "第48.5话",
                                        "pub_time": "17:55",
                                        "pub_ts": 1617098100,
                                        "published": 1,
                                        "season_id": 32916,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/31220048e2326b8190752b7f3575b4eca5ceb231.png",
                                        "title": "影之诗"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/aecbaaf4e3e36a2796684c2eff8ceb9b0f247c6d.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 397051,
                                        "pub_index": "第170话",
                                        "pub_time": "18:25",
                                        "pub_ts": 1617099900,
                                        "published": 1,
                                        "season_id": 6422,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/1d703634cd3ee35b625bf882f27289db301cae63.jpg",
                                        "title": "黑色四叶草"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/42fa93fc553d97276812d051cae208c6be414ca6.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 395768,
                                        "pub_index": "第48.5话",
                                        "pub_time": "18:30",
                                        "pub_ts": 1617100200,
                                        "published": 1,
                                        "season_id": 33086,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/f218be1ed65cc6a662c136d3f992892284c9def3.png",
                                        "title": "闇影詩章（僅限台灣地區）"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/1c1132fe39bec7d88f62c28d703a095c60b4b072.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374012,
                                        "pub_index": "第36话",
                                        "pub_time": "23:30",
                                        "pub_ts": 1617118200,
                                        "published": 1,
                                        "season_id": 36170,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/309651136aa074246e76a00d437519434520f1a6.png",
                                        "title": "关于我转生变成史莱姆这档事 第二季"
                                    }],
                                    "is_today": 0
                                }, {
                                    "date": "3-31",
                                    "date_ts": 1617120000,
                                    "day_of_week": 3,
                                    "episodes": [{
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/48df0069b6b95d2f625515d7b956e2ce89609985.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374379,
                                        "pub_index": "第12话",
                                        "pub_time": "00:30",
                                        "pub_ts": 1617121800,
                                        "published": 1,
                                        "season_id": 36287,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/60e49a0c9f70621825087d48f9074dda4f338ba6.png",
                                        "title": "文豪野犬 汪！"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/ef9e96a13766c05103778d3746d569026b62e1c9.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374391,
                                        "pub_index": "第12话",
                                        "pub_time": "00:45",
                                        "pub_ts": 1617122700,
                                        "published": 1,
                                        "season_id": 36288,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/7f1953a217be2e8df8d6223d2eeeaf3b94243e01.png",
                                        "title": "世界魔女出发！"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/10e0bbc1047b2c45f0f881de334a6f3bfb42a3b6.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374366,
                                        "pub_index": "第12话",
                                        "pub_time": "15:00",
                                        "pub_ts": 1617174000,
                                        "published": 0,
                                        "season_id": 36209,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/9220e0815b88da7be023ff2dc68cb67c6a4c032e.png",
                                        "title": "奇蛋物语 / WONDER EGG PRIORITY"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/a7625fc1f4cf13635664c65cf863a2017694b8d4.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374455,
                                        "pub_index": "第12话",
                                        "pub_time": "17:35",
                                        "pub_ts": 1617183300,
                                        "published": 0,
                                        "season_id": 36362,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/d647736e0c0d3897904cb325663b4b8e704dc0f2.png",
                                        "title": "愤怒的审判"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/26d602c2c6143db78751bc4847f382e20e376481.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374487,
                                        "pub_index": "第12话",
                                        "pub_time": "18:25",
                                        "pub_ts": 1617186300,
                                        "published": 0,
                                        "season_id": 36101,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/c760d81bd8e95af357aa05f44e554642ebb00f77.png",
                                        "title": "记录的地平线 圆桌崩坏"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/d432ca132f5b8e8d72257704817f270595f92148.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 396934,
                                        "pub_index": "第1话~第52话",
                                        "pub_time": "19:00",
                                        "pub_ts": 1617188400,
                                        "published": 0,
                                        "season_id": 38385,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/1eac84c5b94e8bb65cf0e0bf88bfc21dcefb3836.png",
                                        "title": "迪迦奥特曼（中配）"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/3fa7b5f039bad7fb097d4fd7446edf0a108e0faf.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374035,
                                        "pub_index": "第11话",
                                        "pub_time": "21:00",
                                        "pub_ts": 1617195600,
                                        "published": 0,
                                        "season_id": 36284,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/73d7487aa02fed319139e152eaff6c8b8fa381d6.png",
                                        "title": "魔术士欧菲流浪之旅 基姆拉克篇"
                                    }],
                                    "is_today": 1
                                }, {
                                    "date": "4-1",
                                    "date_ts": 1617206400,
                                    "day_of_week": 4,
                                    "episodes": [],
                                    "is_today": 0
                                }, {
                                    "date": "4-2",
                                    "date_ts": 1617292800,
                                    "day_of_week": 5,
                                    "episodes": [{
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/10c54e07c8a63afe1623c84a89a01df0535c7481.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 397234,
                                        "pub_index": "第13话",
                                        "pub_time": "00:00",
                                        "pub_ts": 1617292800,
                                        "published": 0,
                                        "season_id": 36202,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/cda2df9e2ebc029a73acefad02c0318563b43bfa.png",
                                        "title": "天地创造设计部"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/f0796e37abac25ba2aa9f23120646aaa9a3d5ea7.png",
                                        "delay": 1,
                                        "delay_id": 371,
                                        "delay_index": "第13话",
                                        "delay_reason": "本周停更",
                                        "episode_id": 0,
                                        "pub_index": "",
                                        "pub_time": "21:30",
                                        "pub_ts": 1617370200,
                                        "published": 0,
                                        "season_id": 36167,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/61d38dd807c95a5ba8746181c0e05f45856abd63.png",
                                        "title": "转生成蜘蛛又怎样！"
                                    }],
                                    "is_today": 0
                                }, {
                                    "date": "4-3",
                                    "date_ts": 1617379200,
                                    "day_of_week": 6,
                                    "episodes": [{
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/16d85f3b70872b311582b59e0601e975b452b348.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 393342,
                                        "pub_index": "第13话",
                                        "pub_time": "02:25",
                                        "pub_ts": 1617387900,
                                        "published": 0,
                                        "season_id": 36208,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/d39f372c15c828e0fcbb6e00e095924c29d147b0.png",
                                        "title": "重创的伤口"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/b750b45aa179546339eabe6050b50af06227df50.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 391345,
                                        "pub_index": "第1话",
                                        "pub_time": "03:00",
                                        "pub_ts": 1617390000,
                                        "published": 0,
                                        "season_id": 38241,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/844d8ff40d5bee64d298b2251cddd7db0896a7c8.png",
                                        "title": "纯白之音"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/357e75a1fb3e17a80b49f60af35f5d211d639921.jpg",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 386360,
                                        "pub_index": "第46话",
                                        "pub_time": "05:30",
                                        "pub_ts": 1617399000,
                                        "published": 0,
                                        "season_id": 33942,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/01a56659dec4dd58518f31645fa6d3f4bb55754e.png",
                                        "title": "海獭波乐 5th"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/4ab5cf1efbd1c5883b8f0580cb0304f5452c4665.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 341358,
                                        "pub_index": "第26话",
                                        "pub_time": "09:30",
                                        "pub_ts": 1617413400,
                                        "published": 0,
                                        "season_id": 34425,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/ae36d43ebe7ea7176d18bab794de3d8930284feb.png",
                                        "title": "勇者斗恶龙 达伊的大冒险"
                                    }, {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/image/039c4e0b14e27c7a9e5cce2f20a6efd3c8909401.png",
                                        "delay": 0,
                                        "delay_id": 0,
                                        "delay_index": "",
                                        "delay_reason": "",
                                        "episode_id": 374680,
                                        "pub_index": "第13话",
                                        "pub_time": "23:30",
                                        "pub_ts": 1617463800,
                                        "published": 0,
                                        "season_id": 36198,
                                        "square_cover": "http://i0.hdslb.com/bfs/bangumi/image/dd03bcf429f18826d447cfc5bf74628e40a7046e.png",
                                        "title": "堀与宫村"
                                    }],
                                    "is_today": 0
                                }]
                            }
                        }
                }
            )
        }
    }
    // axios({
    //   url: '//api.bilibili.com/pgc/web/timeline/v2',
    //   query: query
    // })
}

// 获取番剧和国创rank
export const getPGCRank = (query) => {
    let url = '//api.bilibili.com/pgc/web/rank/list'
    if ([2, 3, 4, 5].indexOf(query.season_type) !== -1) {
        url = '//api.bilibili.com/pgc/season/rank/web/list'
    }
    return {
        then(f) {
            f(
                {
                    data:
                        {
                            "code": 0, "message": "success", "result": {
                                "list": [{
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/91e9534cc55aa1a6dc959e7d6d33bde970208232.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/3dc584653544d580b95dc4e99c95595eda0348a8.jpg",
                                        "index_show": "全24话"
                                    },
                                    "pts": 4143799,
                                    "rank": 1,
                                    "season_id": 34430,
                                    "stat": {
                                        "danmaku": 3824940,
                                        "follow": 8875849,
                                        "series_follow": 8875967,
                                        "view": 506795700
                                    },
                                    "title": "咒术回战",
                                    "url": "https://www.bilibili.com/bangumi/play/ss34430"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/039c4e0b14e27c7a9e5cce2f20a6efd3c8909401.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/a1d73873cf4a1646e72043a65bac492df1001335.jpg",
                                        "index_show": "更新至第12话"
                                    },
                                    "pts": 3660596,
                                    "rank": 2,
                                    "season_id": 36198,
                                    "stat": {
                                        "danmaku": 1561587,
                                        "follow": 5169224,
                                        "series_follow": 5169265,
                                        "view": 130814834
                                    },
                                    "title": "堀与宫村",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36198"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/1c1132fe39bec7d88f62c28d703a095c60b4b072.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/ea76de62ed1d0db23309e90d662b58bfa6d6c037.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 2700376,
                                    "rank": 3,
                                    "season_id": 36170,
                                    "stat": {
                                        "danmaku": 1076981,
                                        "follow": 8013413,
                                        "series_follow": 8341382,
                                        "view": 149188651
                                    },
                                    "title": "关于我转生变成史莱姆这档事 第二季",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36170"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/3ec497853b0045ee7099d1e4d4a00552ea3aa12a.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/932153196715b8a60f65991d0e6b00d62df4c1f8.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 1284907,
                                    "rank": 4,
                                    "season_id": 36204,
                                    "stat": {
                                        "danmaku": 181784,
                                        "follow": 1484560,
                                        "series_follow": 1527592,
                                        "view": 14371976
                                    },
                                    "title": "悠哉日常大王 第三季",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36204"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/3557b7261e17dd4d4a1e5f1f102f0f3cbecd10a0.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/2511104208ed0337258c3c847ebba2c23d659966.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 1188889,
                                    "rank": 5,
                                    "season_id": 36241,
                                    "stat": {
                                        "danmaku": 338480,
                                        "follow": 2145778,
                                        "series_follow": 2145794,
                                        "view": 39535026
                                    },
                                    "title": "怪物事变",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36241"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/4f3edbede7fc0bdb52842075cf8faaa1c5953eaa.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/3f39f1e9cfd573d1cf1689ebf4a988163621a08a.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 1079867,
                                    "rank": 6,
                                    "season_id": 36429,
                                    "stat": {
                                        "danmaku": 785254,
                                        "follow": 8260228,
                                        "series_follow": 8616287,
                                        "view": 66679997
                                    },
                                    "title": "Re：从零开始的异世界生活 第二季 后半",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36429"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/f0796e37abac25ba2aa9f23120646aaa9a3d5ea7.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/34c3eb6b0691b8a70b6ba39956088449f8ae40b5.jpg",
                                        "index_show": "更新至第12话"
                                    },
                                    "pts": 897292,
                                    "rank": 7,
                                    "season_id": 36167,
                                    "stat": {
                                        "danmaku": 674005,
                                        "follow": 3813814,
                                        "series_follow": 3813824,
                                        "view": 124308274
                                    },
                                    "title": "转生成蜘蛛又怎样！",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36167"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/c87869bc63883138e9f561a7c303284f6ed1dc89.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/2bd5e34e416318587e213a92faa1885b13c221a5.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 807798,
                                    "rank": 8,
                                    "season_id": 36579,
                                    "stat": {
                                        "danmaku": 62997,
                                        "follow": 864910,
                                        "series_follow": 968455,
                                        "view": 5538177
                                    },
                                    "title": "赛马娘 第二季",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36579"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/aecbaaf4e3e36a2796684c2eff8ceb9b0f247c6d.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/aea10540dfc8dd6262a39cf405696e50e5b51972.jpg",
                                        "index_show": "全170话"
                                    },
                                    "pts": 733262,
                                    "rank": 9,
                                    "season_id": 6422,
                                    "stat": {
                                        "danmaku": 2211776,
                                        "follow": 2135554,
                                        "series_follow": 2168763,
                                        "view": 198865371
                                    },
                                    "title": "黑色四叶草",
                                    "url": "https://www.bilibili.com/bangumi/play/ss6422"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/13307ebb99ba3c64f12772c289846809f6b3aa1c.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/71e508388eb43dea767ae5a700a6fc1bbcfa2f56.jpg",
                                        "index_show": "更新至第11话"
                                    },
                                    "pts": 727842,
                                    "rank": 10,
                                    "season_id": 36211,
                                    "stat": {
                                        "danmaku": 556664,
                                        "follow": 1498433,
                                        "series_follow": 1498435,
                                        "view": 29811877
                                    },
                                    "title": "无限滑板 / SK8 the Infinity",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36211"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/2a0dc651a4ffca1cfe915dbc7eb2c8c65256813d.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/78f574114f6c0659c6c8e7148a9647d7e5e3c759.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 577663,
                                    "rank": 11,
                                    "season_id": 36166,
                                    "stat": {
                                        "danmaku": 527041,
                                        "follow": 4299650,
                                        "series_follow": 4509583,
                                        "view": 44300314
                                    },
                                    "title": "五等分的新娘∬",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36166"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/ef10d28a7f875528c38702ac9d5ba03fee3d4eda.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/d94a2507dc64a9e433e1ca854328d6d4753859f6.jpg",
                                        "index_show": "即将开播"
                                    },
                                    "pts": 508714,
                                    "rank": 12,
                                    "season_id": 38254,
                                    "stat": {
                                        "danmaku": 7219,
                                        "follow": 1175748,
                                        "series_follow": 1199067,
                                        "view": 472316
                                    },
                                    "title": "忧国的莫里亚蒂 后半",
                                    "url": "https://www.bilibili.com/bangumi/play/ss38254"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/098d58fef696ce295f19878b6035214abece824f.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/c87b7ebfa2de09298d5e4e2312dd1a5f85aec8e4.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 476676,
                                    "rank": 13,
                                    "season_id": 37498,
                                    "stat": {
                                        "danmaku": 86022,
                                        "follow": 1574105,
                                        "series_follow": 1682158,
                                        "view": 9807411
                                    },
                                    "title": "碧蓝航线：微速前行！",
                                    "url": "https://www.bilibili.com/bangumi/play/ss37498"
                                }, {
                                    "badge": "限时免费",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "限时免费"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/cbf16b39569f75717c8af09985baf566cf739299.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/9d2f2a50adf5c45e457d6239e2665527ede7a0f2.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 388239,
                                    "rank": 14,
                                    "season_id": 36177,
                                    "stat": {
                                        "danmaku": 595655,
                                        "follow": 2754144,
                                        "series_follow": 2754155,
                                        "view": 61542683
                                    },
                                    "title": "工作细胞BLACK",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36177"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/2850e7ec13e856a65832f772151a6087fb94e868.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/643810b79bc4c1eabcb0d119421a2159f68a16ce.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 380681,
                                    "rank": 15,
                                    "season_id": 36165,
                                    "stat": {
                                        "danmaku": 385931,
                                        "follow": 1742984,
                                        "series_follow": 1742985,
                                        "view": 32809944
                                    },
                                    "title": "弱势角色友崎君",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36165"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/1830ac3beeb4436645bee4e5d6ab26fc39267d90.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/1a5ba2f09e3a33dfdd5b84f65e455d8ca7e006a6.jpg",
                                        "index_show": "全11话"
                                    },
                                    "pts": 375958,
                                    "rank": 16,
                                    "season_id": 36175,
                                    "stat": {
                                        "danmaku": 286836,
                                        "follow": 3613644,
                                        "series_follow": 3806089,
                                        "view": 48432476
                                    },
                                    "title": "Ｄｒ．ＳＴＯＮＥ 石纪元  (第二季)",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36175"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/10e0bbc1047b2c45f0f881de334a6f3bfb42a3b6.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/234fe4c0aff560f7462119784f291b57a390e82c.jpg",
                                        "index_show": "更新至第11话"
                                    },
                                    "pts": 320590,
                                    "rank": 17,
                                    "season_id": 36209,
                                    "stat": {
                                        "danmaku": 270849,
                                        "follow": 1664348,
                                        "series_follow": 1664364,
                                        "view": 23531776
                                    },
                                    "title": "奇蛋物语 / WONDER EGG PRIORITY",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36209"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/3926335134e162b6b3f12b4808265e4b14753152.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/6870ddf2357bc6b0d43ad2dee86bbe8b73dc075e.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 313270,
                                    "rank": 18,
                                    "season_id": 36290,
                                    "stat": {
                                        "danmaku": 47469,
                                        "follow": 452621,
                                        "series_follow": 452621,
                                        "view": 4200517
                                    },
                                    "title": "偶像荣耀/IDOLY PRIDE",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36290"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/de1dc90a7fb5456a9db09b0e21b1d04e3a1606cb.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/1bf4faef3ba724cb30c2af4b13f9914f6d7b6b18.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 226757,
                                    "rank": 19,
                                    "season_id": 36131,
                                    "stat": {
                                        "danmaku": 374801,
                                        "follow": 3584788,
                                        "series_follow": 3849325,
                                        "view": 34641191
                                    },
                                    "title": "动物狂想曲 / BEASTARS 第二季",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36131"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/0fea32875a9c2d20549c95c5549af077caeed30a.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/4012c6b98bc6320648d5cbd436b013d73f6f7d6d.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 220955,
                                    "rank": 20,
                                    "season_id": 36286,
                                    "stat": {
                                        "danmaku": 66904,
                                        "follow": 716523,
                                        "series_follow": 716523,
                                        "view": 9378127
                                    },
                                    "title": "怪病医拉姆尼",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36286"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/71d54cae830d32a5af776dcc46632146fbdba868.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/017bdad8cf6471a0d0cf753537babaa0e2f7c47d.jpg",
                                        "index_show": "更新至第192话"
                                    },
                                    "pts": 211465,
                                    "rank": 21,
                                    "season_id": 5978,
                                    "stat": {
                                        "danmaku": 4196489,
                                        "follow": 2058906,
                                        "series_follow": 2058909,
                                        "view": 223175010
                                    },
                                    "title": "博人传 火影忍者新时代",
                                    "url": "https://www.bilibili.com/bangumi/play/ss5978"
                                }, {
                                    "badge": "限时免费",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "限时免费"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/86b7857fe724f62e8000c5759b6561cfeb9a2ee7.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/e30a730a9011bbc4f93f439751d3947eda8489eb.jpg",
                                        "index_show": "全12话"
                                    },
                                    "pts": 173245,
                                    "rank": 23,
                                    "season_id": 36191,
                                    "stat": {
                                        "danmaku": 317798,
                                        "follow": 2382116,
                                        "series_follow": 2382122,
                                        "view": 61268976
                                    },
                                    "title": "好比是最终迷宫前的少年到新手村生活一般的故事",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36191"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/f7ef599b52140d77b6e1f09cca3b44646fdf4cb2.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/d7115d121fae6c01eda71d083805e46eb9bb0fb4.jpg",
                                        "index_show": "全11话"
                                    },
                                    "pts": 139463,
                                    "rank": 24,
                                    "season_id": 36210,
                                    "stat": {
                                        "danmaku": 307369,
                                        "follow": 3396105,
                                        "series_follow": 3865690,
                                        "view": 31951077
                                    },
                                    "title": "约定的梦幻岛 第二季",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36210"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/10c54e07c8a63afe1623c84a89a01df0535c7481.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/611583a7615f3ad11ddf3bd55e87af6fc9825590.jpg",
                                        "index_show": "更新至第12话"
                                    },
                                    "pts": 135674,
                                    "rank": 25,
                                    "season_id": 36202,
                                    "stat": {
                                        "danmaku": 143895,
                                        "follow": 986932,
                                        "series_follow": 986932,
                                        "view": 14850533
                                    },
                                    "title": "天地创造设计部",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36202"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/88211e0d1618b8aa5b48267e77d91c1f25279d4c.jpg",
                                        "index_show": "全29话"
                                    },
                                    "pts": 125365,
                                    "rank": 26,
                                    "season_id": 25739,
                                    "stat": {
                                        "danmaku": 4542602,
                                        "follow": 6644615,
                                        "series_follow": 8341382,
                                        "view": 347060772
                                    },
                                    "title": "关于我转生变成史莱姆这档事",
                                    "url": "https://www.bilibili.com/bangumi/play/ss25739"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/0212baa8898d0c819c7fb84015e95b8fca621435.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/69e1984efa93762863457030830cf66dd908cdb2.jpg",
                                        "index_show": "全25话"
                                    },
                                    "pts": 118262,
                                    "rank": 27,
                                    "season_id": 34423,
                                    "stat": {
                                        "danmaku": 92943,
                                        "follow": 657311,
                                        "series_follow": 714833,
                                        "view": 6949984
                                    },
                                    "title": "阿松 第三季",
                                    "url": "https://www.bilibili.com/bangumi/play/ss34423"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/a7625fc1f4cf13635664c65cf863a2017694b8d4.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/17e4c0e09dad2e3d9da6bad3ef39b826a3acb436.jpg",
                                        "index_show": "更新至第11话"
                                    },
                                    "pts": 89014,
                                    "rank": 28,
                                    "season_id": 36362,
                                    "stat": {
                                        "danmaku": 46299,
                                        "follow": 2495538,
                                        "series_follow": 2639028,
                                        "view": 11452834
                                    },
                                    "title": "愤怒的审判",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36362"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/4179b4398bad6f92e876e352cae21be7b8ceb8bf.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/d84fb0c9b4e5fa163f10ce6819becfaefa4f02c9.jpg",
                                        "index_show": "全26话"
                                    },
                                    "pts": 71861,
                                    "rank": 29,
                                    "season_id": 26801,
                                    "stat": {
                                        "danmaku": 9053679,
                                        "follow": 9886343,
                                        "series_follow": 10348739,
                                        "view": 641540508
                                    },
                                    "title": "鬼灭之刃",
                                    "url": "https://www.bilibili.com/bangumi/play/ss26801"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/48df0069b6b95d2f625515d7b956e2ce89609985.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/24b8c7caa40fa21dd648c13189d5bcdb1f066bd0.jpg",
                                        "index_show": "更新至第12话"
                                    },
                                    "pts": 60655,
                                    "rank": 30,
                                    "season_id": 36287,
                                    "stat": {
                                        "danmaku": 161115,
                                        "follow": 2748678,
                                        "series_follow": 3007814,
                                        "view": 13181813
                                    },
                                    "title": "文豪野犬 汪！",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36287"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/99aa939d399965129d8d0c50687f0e61f9f2bacd.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/649a5fc1ce9b747bfd220846b22958d582763642.png",
                                        "index_show": "全12话"
                                    },
                                    "pts": 59892,
                                    "rank": 31,
                                    "season_id": 34422,
                                    "stat": {
                                        "danmaku": 23370,
                                        "follow": 630726,
                                        "series_follow": 688150,
                                        "view": 3733951
                                    },
                                    "title": "厨神小当家2",
                                    "url": "https://www.bilibili.com/bangumi/play/ss34422"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/b3932ed2ea9d1458ae3ec372e6f129393d17c361.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/9158027d5fdb5fbaf471e94ded976c903656c19b.jpg",
                                        "index_show": "全7话"
                                    },
                                    "pts": 52354,
                                    "rank": 32,
                                    "season_id": 38163,
                                    "stat": {
                                        "danmaku": 61719,
                                        "follow": 387654,
                                        "series_follow": 387655,
                                        "view": 7598089
                                    },
                                    "title": "环太平洋：黑色禁区",
                                    "url": "https://www.bilibili.com/bangumi/play/ss38163"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/fbd2849172a5ed7b206ab1f5269db6705bc49352.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/ba46449c7a48d6b6aedb628ee90b9176164fb2bd.jpg",
                                        "index_show": "更新至第12话"
                                    },
                                    "pts": 51898,
                                    "rank": 33,
                                    "season_id": 36282,
                                    "stat": {
                                        "danmaku": 47749,
                                        "follow": 505593,
                                        "series_follow": 505595,
                                        "view": 6767220
                                    },
                                    "title": "巴克·亚罗/BACK ARROW",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36282"
                                }, {
                                    "badge": "限时免费",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "限时免费"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/44495658be4713cb36d830064596748aff82faae.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/2e75960a791bdeeee0b8623c2fd6d2d3dc30e626.jpg",
                                        "index_show": "全24话"
                                    },
                                    "pts": 44762,
                                    "rank": 34,
                                    "season_id": 34431,
                                    "stat": {
                                        "danmaku": 386195,
                                        "follow": 2041661,
                                        "series_follow": 2616995,
                                        "view": 29251582
                                    },
                                    "title": "半妖的夜叉姬",
                                    "url": "https://www.bilibili.com/bangumi/play/ss34431"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/dd7a9d0a0bee32b1f43c2656398d8463d12b3069.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/09ef607ef9700453d00785a5217faca74b155016.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 43507,
                                    "rank": 35,
                                    "season_id": 24596,
                                    "stat": {
                                        "danmaku": 3763405,
                                        "follow": 5076283,
                                        "series_follow": 8634434,
                                        "view": 327383303
                                    },
                                    "title": "OVERLORD Ⅲ",
                                    "url": "https://www.bilibili.com/bangumi/play/ss24596"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/b8e72ea69e57e0b7ac85d8b4d366554fd866df1a.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/71273bf60ce3e901783e68ab3b39cc93be640d43.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 43452,
                                    "rank": 36,
                                    "season_id": 2576,
                                    "stat": {
                                        "danmaku": 3638160,
                                        "follow": 5121774,
                                        "series_follow": 8634434,
                                        "view": 335248866
                                    },
                                    "title": "OVERLORD",
                                    "url": "https://www.bilibili.com/bangumi/play/ss2576"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/c72a95c3cae82f58f8fa25facd40960aa2003d26.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/478a2306abf44c2bdd1b0c2a79d4fee2cf133025.jpg",
                                        "index_show": "全14话"
                                    },
                                    "pts": 41809,
                                    "rank": 37,
                                    "season_id": 5800,
                                    "stat": {
                                        "danmaku": 5372870,
                                        "follow": 6611944,
                                        "series_follow": 6817650,
                                        "view": 250619821
                                    },
                                    "title": "小林家的龙女仆",
                                    "url": "https://www.bilibili.com/bangumi/play/ss5800"
                                }, {
                                    "badge": "",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": ""},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/31e89da7dd10dcc30cc4bc23db1cbcc4ef3f7387.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/b451e908f2aac6271c6c98957bf74be17d9ebf19.jpg",
                                        "index_show": "全24话"
                                    },
                                    "pts": 40488,
                                    "rank": 38,
                                    "season_id": 34841,
                                    "stat": {
                                        "danmaku": 2940,
                                        "follow": 126192,
                                        "series_follow": 126192,
                                        "view": 4407195
                                    },
                                    "title": "与汪汪喵喵同居的开心日常",
                                    "url": "https://www.bilibili.com/bangumi/play/ss34841"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/851f979c8ebcc7583a43abd4b786c4e2e66b746b.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/41456fd8a4f8747ae60be6d463dcd01ce99d50cd.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 39908,
                                    "rank": 39,
                                    "season_id": 21466,
                                    "stat": {
                                        "danmaku": 3897101,
                                        "follow": 4943160,
                                        "series_follow": 8634434,
                                        "view": 311464529
                                    },
                                    "title": "OVERLORD Ⅱ",
                                    "url": "https://www.bilibili.com/bangumi/play/ss21466"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/26d602c2c6143db78751bc4847f382e20e376481.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/75e2b4b3f1b4c0b62d7cec137bfeb3c2d1bf76de.jpg",
                                        "index_show": "更新至第11话"
                                    },
                                    "pts": 39471,
                                    "rank": 40,
                                    "season_id": 36101,
                                    "stat": {
                                        "danmaku": 64675,
                                        "follow": 1605237,
                                        "series_follow": 1771126,
                                        "view": 10352468
                                    },
                                    "title": "记录的地平线 圆桌崩坏",
                                    "url": "https://www.bilibili.com/bangumi/play/ss36101"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/e3a2511b2116dd2e05538d725939a32d0c101627.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/caebe3cb9679017b89375be8c5bd9d565723b2cf.jpg",
                                        "index_show": "全1话"
                                    },
                                    "pts": 38825,
                                    "rank": 41,
                                    "season_id": 38171,
                                    "stat": {
                                        "danmaku": 7824,
                                        "follow": 94262,
                                        "series_follow": 3592989,
                                        "view": 1077801
                                    },
                                    "title": "名侦探柯南 绯色的不在证明",
                                    "url": "https://www.bilibili.com/bangumi/play/ss38171"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/f34ff3975c39913af936c133ae60a5891babba08.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/39c4c078be0700aa4e312aa62402c6b6a7655ac7.jpg",
                                        "index_show": "全39话"
                                    },
                                    "pts": 38751,
                                    "rank": 42,
                                    "season_id": 25681,
                                    "stat": {
                                        "danmaku": 3895010,
                                        "follow": 4132266,
                                        "series_follow": 5531358,
                                        "view": 356460076
                                    },
                                    "title": "JOJO的奇妙冒险 黄金之风",
                                    "url": "https://www.bilibili.com/bangumi/play/ss25681"
                                }, {
                                    "badge": "独家",
                                    "badge_info": {"bg_color": "#00C0FF", "bg_color_night": "#0B91BE", "text": "独家"},
                                    "badge_type": 1,
                                    "copyright": "dujia",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/2b413dda8c6b46b99a5956b6cfa32bc356f3a7b4.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/b72154cdef7ac7c4ae92ae8cf17784ca7bddcb24.jpg",
                                        "index_show": "全14话"
                                    },
                                    "pts": 38308,
                                    "rank": 43,
                                    "season_id": 37889,
                                    "stat": {
                                        "danmaku": 133798,
                                        "follow": 294280,
                                        "series_follow": 8898206,
                                        "view": 18535154
                                    },
                                    "title": "工作细胞（中配版）",
                                    "url": "https://www.bilibili.com/bangumi/play/ss37889"
                                }, {
                                    "badge": "",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": ""},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/86dd95a3aa0ab78e1b7ccc2934e1dd3a6c30fcbe.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/8e64bbccb7ca390916b09bef474a285ca8f3372a.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 37182,
                                    "rank": 44,
                                    "season_id": 26765,
                                    "stat": {
                                        "danmaku": 444833,
                                        "follow": 735685,
                                        "series_follow": 1075870,
                                        "view": 29730628
                                    },
                                    "title": "ULTRAMAN 机动奥特曼",
                                    "url": "https://www.bilibili.com/bangumi/play/ss26765"
                                }, {
                                    "badge": "",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": ""},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/86dd95a3aa0ab78e1b7ccc2934e1dd3a6c30fcbe.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/8e64bbccb7ca390916b09bef474a285ca8f3372a.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 37182,
                                    "rank": 45,
                                    "season_id": 26946,
                                    "stat": {
                                        "danmaku": 444833,
                                        "follow": 63593,
                                        "series_follow": 1075870,
                                        "view": 29730622
                                    },
                                    "title": "ULTRAMAN 机动奥特曼（中配）",
                                    "url": "https://www.bilibili.com/bangumi/play/ss26946"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/8ae5fbfcdbe71a4289d5fbcd37b75e1056cdddfd.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/b25b0a5816b8217b2e3c49df7d1ea598bba9c6d8.jpg",
                                        "index_show": "全23话"
                                    },
                                    "pts": 31233,
                                    "rank": 46,
                                    "season_id": 28638,
                                    "stat": {
                                        "danmaku": 1047154,
                                        "follow": 2293770,
                                        "series_follow": 2320605,
                                        "view": 101304450
                                    },
                                    "title": "入间同学入魔了",
                                    "url": "https://www.bilibili.com/bangumi/play/ss28638"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/38e2a273f528fd01c34f1fc4df0f69c64487efad.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/bd9264458b90c7aab208fc3083ea7305b52d0b28.png",
                                        "index_show": "更新至第1058话"
                                    },
                                    "pts": 30818,
                                    "rank": 47,
                                    "season_id": 33378,
                                    "stat": {
                                        "danmaku": 5340265,
                                        "follow": 2853037,
                                        "series_follow": 3592989,
                                        "view": 241465544
                                    },
                                    "title": "名侦探柯南",
                                    "url": "https://www.bilibili.com/bangumi/play/ss33378"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/f2425cbdb07cc93bd0d3ba1c0099bfe78f5dc58a.png",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/bangumi/475874041f64c3658d90d8c4b47c8f294d14d0ec.jpg",
                                        "index_show": "全13话"
                                    },
                                    "pts": 30107,
                                    "rank": 48,
                                    "season_id": 33802,
                                    "stat": {
                                        "danmaku": 1863472,
                                        "follow": 7560390,
                                        "series_follow": 8616287,
                                        "view": 112661251
                                    },
                                    "title": "Re：从零开始的异世界生活 第二季 前半",
                                    "url": "https://www.bilibili.com/bangumi/play/ss33802"
                                }, {
                                    "badge": "会员抢先",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员抢先"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/99aa939d399965129d8d0c50687f0e61f9f2bacd.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/58e8a1856e857b5e6091eef53d90db9b68ab1fcc.png",
                                        "index_show": "全12话"
                                    },
                                    "pts": 28965,
                                    "rank": 49,
                                    "season_id": 33059,
                                    "stat": {
                                        "danmaku": 13167,
                                        "follow": 523826,
                                        "series_follow": 688150,
                                        "view": 1367517
                                    },
                                    "title": "厨神小当家2（中配）",
                                    "url": "https://www.bilibili.com/bangumi/play/ss33059"
                                }, {
                                    "badge": "会员专享",
                                    "badge_info": {"bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "会员专享"},
                                    "badge_type": 0,
                                    "copyright": "bilibili",
                                    "cover": "http://i0.hdslb.com/bfs/bangumi/image/ae05a72b11d7f409bbff9475afb13dfca081ffd1.jpg",
                                    "new_ep": {
                                        "cover": "http://i0.hdslb.com/bfs/archive/b9cade0637c6aba5ecbacd7c59e303e0366016c9.jpg",
                                        "index_show": "全24话"
                                    },
                                    "pts": 25601,
                                    "rank": 50,
                                    "season_id": 27993,
                                    "stat": {
                                        "danmaku": 1284936,
                                        "follow": 3006445,
                                        "series_follow": 3806089,
                                        "view": 130290509
                                    },
                                    "title": "Ｄｒ．ＳＴＯＮＥ 石纪元",
                                    "url": "https://www.bilibili.com/bangumi/play/ss27993"
                                }], "note": "『连载动画』投稿在 2021年03月28日 - 2021年03月31日 的数据综合得分，每日更新一次"
                            }
                        }
                }
            )
        }
    }
    // axios({
    //   url,
    //   query: query
    // })
}

// 获取番剧、国创特别推荐
export const getSpecialRecommend = (query) => {
    return axios({
        url: '//api.bilibili.com/pgc/operation/api/slideshow',
        query: query
    })
}

// 获取课堂推荐课程
export const getCheeseRecommend = (query) => {
    return axios({
        url: '//api.bilibili.com/pugv/app/web/floor/switch',
        query: query
    })
}

// 获取推荐漫画
export const getMangaPanel = (url, data) => {
    return axios({
        method: 'post',
        url: '//manga.bilibili.com/twirp/comic.v1.Comic/' + url,
        data,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
}

// 获取漫画排行榜
export const getMangaRank = (url, data) => {
    return axios({
        url: '//manga.bilibili.com/twirp/comic.v1.Comic/' + url,
        method: 'post',
        data,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
}

// 获取直播楼层数据
export const getLiveRoomRecommend = () => {
    return axios({
        url: '//api.live.bilibili.com/xlive/web-interface/v1/webMain/getList',
        query: {
            platform: 'web'
        }
    })
}

// 获取直播楼层换一换
export const getLiveRoomgetNewDynamic = () => {
    return axios({
        url: '//api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList',
        query: {
            platform: 'web'
        }
    })
}

// 获取关注的主播
export const getFollowUp = (query) => {
    return axios({
        url: '//api.live.bilibili.com/relation/v1/feed/feed_list',
        query: query,
        withCredentials: true
    })
}

// 获取专栏楼层数据
export const getArticle = (query) => {
    return axios({
        url: '//api.bilibili.com/x/article/recommends',
        query: query
    })
}

// 获取专栏排行榜
export const getArticleRank = (query) => {
    return axios({
        url: '//api.bilibili.com/x/article/rank/list',
        query: query
    })
}

// 获取楼层排序
export const getElevatorSort = () => {
    return {
        then(f) {
            f(
                {data: {"code": 0, "message": "0", "ttl": 1, "data": {"sort": "18vk9hj00", "len": 22}}})
        }
    }
    // axios({
    //   url: '//api.bilibili.com/x/web-interface/home/sort',
    //   withCredentials: true
    // })
}

// 设置楼层排序
export const setElevatorSort = (data) => {
    return axios({
        url: '//api.bilibili.com/x/web-interface/index/sort/set',
        method: 'post',
        data: qs.stringify(Object.assign(data, {csrf: cookie.get('bili_jct')})),
        withCredentials: true
    })
}

// 特别推荐
export const getSRecommend = () => {
    return axios({
        url: '//www.bilibili.com/index/recommend.json'
    })
}

// gif动图
export const getGif = () => {
    return axios({
        url: '//api.bilibili.com/x/web-interface/index/icon'
    })
}