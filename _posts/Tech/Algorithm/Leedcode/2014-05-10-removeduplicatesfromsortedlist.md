---
layout: post
title: Remove Duplicates from Sorted List  
category: interview
---

###题目
[原题: ](http://oj.leetcode.com/problems/remove-duplicates-from-sorted-list/)Given a sorted linked list, delete all duplicates such that each element appear only once.

<b>Here are few examples.</b>

        Given 1->1->2, return 1->2.
        Given 1->1->2->3->3, return 1->2->3.

<b>题意: </b>给排好序的链表去重.

###思路
使用两个指针指向head,然后一前一后开始往后遍历,如果两个指针指向的值相等,则跳过这个节点并且删除该节点.

######代码

		ListNode *deleteDuplicates(ListNode *head) 
        {
            ListNode *curNode = head;
            ListNode *newNode = curNode;
            
            while(curNode)
            {
                newNode = curNode->next;
                if(newNode && (newNode->val == curNode->val))
                {
                    curNode->next = newNode->next;
                    delete newNode;
                }
                else
                {
                    curNode = curNode->next;
                }
            }
            return head;
        }